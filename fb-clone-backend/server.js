const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 9000;
const PostDb = require('./models/postSchema.js');
const Pusher = require('pusher');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(require('./routers/auth'));
// app.use(cors({ 'Access-Control-Allow-Origin': 'http://localhost:3000' }));

const pusher = new Pusher({
	appId: '1176666',
	key: 'c8fd52786f7ddd6cd929',
	secret: 'b31158ac3b6ea5ca4129',
	cluster: 'ap2',
	useTLS: true,
});

const mongoURI =
	'mongodb+srv://admin:atul1210@cluster0.avlrm.mongodb.net/fbdb?retryWrites=true&w=majority';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('database connected');
	})
	.catch((err) => {
		console.log('connection failed...');
	});

// const conn = mongoose.createConnection(mongoURI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// conn.once('open', () => {
// 	console.log('dbconnected');
// 	const changeStream = mongoose.connection.collection('PostDb').watch();

// 	changeStream.on('change', (change) => {
// 		console.log(change);

// 		if (change.operationType === 'insert') {
// 			console.log('triggering pusher');
// 			pusher.trigger('PostDb', 'inserted', {
// 				change: change,
// 			});
// 		} else {
// 			console.log('error tiggering pusher');
// 		}
// 	});
// });

// 	const conn = mongoose.createConnection(mongoURI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useCreateIndex: true,
// });

mongoose.connection.once('open', () => {
	console.log('DB Connected');
	console.log('dbconnected');
	const changeStream = mongoose.connection.collection('postdbs').watch();

	changeStream.on('change', (change) => {
		if (change.operationType === 'insert') {
			console.log('triggering pusher');
			try {
				pusher.trigger('postdbs', 'inserted', {
					change: change,
				});
			} catch (err) {
				console.log('trigger error>>>>', err);
			}
		} else {
			console.log('wrong pusher operation type');
		}
	});
});

//API routes

app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/post', (req, res) => {
	const post = new PostDb(req.body);

	console.log('>>>>>>>>>>', req.body);
	res.send(req.body);

	post.save()
		.then(() => {
			res.status(201);
			// mongoose.connection.close();
		})
		.catch((err) => {
			res.status(500);
		});
});

app.get('/retrievepost', (req, res) => {
	PostDb.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			data.sort((b, a) => {
				return a.timestamp - b.timestamp;
			});
			res.status(200).send(data);
		}
	});
});

// app.put('/likes', (req, res) => {
// 	PostDb.findByIdAndUpdate(req.body._id, {
// 		$push: { likes: req.user._id },
// 	});
// });

app.listen(port, () => console.log(`listening on localhost ${port}`));
