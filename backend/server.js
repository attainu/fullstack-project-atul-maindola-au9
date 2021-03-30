const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 9000;
const Pusher = require('pusher');
const PostDb = require('./models/postSchema.js');
require('./models/usermodel');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(require('./routers/auth'));
app.use(require('./routers/post'));

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

mongoose.connection.once('open', () => {
	console.log('DB Connected');
	console.log('dbconnected');
	const changeStream = mongoose.connection.collection('postdbs').watch();

	changeStream.on('change', (change) => {
		if (
			change.operationType === 'insert' ||
			change.operationType === 'update' ||
			change.operationType === 'delete'
		) {
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

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => console.log(`listening on localhost ${port}`));
