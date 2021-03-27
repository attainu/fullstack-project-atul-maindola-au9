import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
	return (
		<div className='storyReel'>
			<Story
				image='https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				profileSrc='data:image/jpeg;base64,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'
				title='Random User 1'
			/>
			<Story
				image='https://images.pexels.com/photos/4486394/pexels-photo-4486394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				profileSrc='data:image/jpeg;base64,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'
				title='Random User 2'
			/>
			<Story
				image='https://images.pexels.com/photos/4665930/pexels-photo-4665930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				profileSrc='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SDw8SEg0PEBISEBUPEhAPDxAPDxAPFRYWFhUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHSUtKystLSstLSstLSstLS0tLS0tLS0rLystKy0tLy0tLSsrKy0tLS0tLS0rLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABHEAABAwEEBgYGBggFBQEAAAABAAIDEQQGITEFEkFRcYETIlJhkaEHMkKxwdEjYnKSssIUJDNDguHw8URjc4OiU3ST0uIV/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQMGAv/EADkRAAIBAgMECAUBBwUAAAAAAAABAgMRBCExBRJBUWFxgZGhsdHwEyIyweFCBiMzNFKS8RRigqKy/9oADAMBAAIRAxEAPwDuCIUQBERAEREARF8vcACSQAMak0AHegPpAoG3XkibURgynfkzx28lBWzTdokzkLR2Y+oPHPzVdW2rh6eSe8+j107rvoJdPB1Z5vJdPpqXO0WyJnryNZ3OIBPLNR0l5LMMnPd9ltPxUVLRVc9tVn9EUuu79PIlx2fTX1Nvw995aZL2N9mBzuLw33ArCb1u2QD75PwVcRRpbTxTf126lH0NywlFfp8X6ljF63f9Bv3z8llZewe1ARwkr7wFV0WFtPFL9fhH0DwlH+nxfqXKO8tnOfSN4tqP+JKkbPboX+pKxx3AgHwOK54ilQ21WT+eKfevXyNUtn039La8TpqKgWTStojpqykjsu6w88uSnrDedjqCVmoe02pbzGY81ZUNrYeplL5X06d/rYiVMFVhpn1ehYUWOKVrwHNcHNORBBBWRWZDCIiAIiIAiIgPUREB4UREAREQBF53n+yq+mdPnFkJpsMgz/h+fhvUfE4mnh4b0+xcX1e7LibaVGVWVo/4JPSmm44aj15OyDg3idnDNVO3aRlmNXvw2MGDRy+a1EXL4rH1cRk8o8l9+fl0FxRw0KWazfP3oERFCJAREQBERAEREAREQBERAbNjtkkTqxvLd4zDuI2q0aL0+ySjX0jfl9Rx7jsPcVTkUvDY2rh38ry5PT8e73NNbDwq668zpqKn6G06WUZIS5mQdm5nzH9dytkcjXAFpDgRUEGoI3rqMLi6eIjeGvFcV6rpWXaU1ahKk7S7GZERFKNIREQHqIiA8KIiALzvP9l6qteXS2JhYcsJCN/Y+fhvUfE4mGHp78+xc3y96LM20aUqst1f4MOn9NF5McZpGMC4fvP/AJ96gURchXrzrTc5vPy6F76y9p04047sQiItJ7CItDTWl47NHrOxcfUjBxcfgO9e4QlOSjFXbPMpKKu3kbk0zWNLnOa1ozc4gAcyq9b75QMqImOlPaP0bPE4nwVQ0npOW0O1pHVp6rBgxnAfHNaavsPsiCV6ru+SyXfq+tNdpW1cdJu0Ml4lgnvhaneq2OMdzNY+LitR147af8S7k2Me5qikVhHB4eOkI9yIrr1XrJ99iVbeK2j/ABLubYz7wtqC91rbn0b/ALbKfhooBFmWEoS1hHuQVeotJPvLvYb6RkgSxOj+sw67eYwI81YrLao5W60b2vbvaa47juK5Ms9htskLw+N5a7bTJw3EbQoFfZFOSvSe6+9eq67sk08dNZTzXidYRRF39OstLaEBkrRVzK4Edpvd7lLrn6lOdOThNWaLOMlNb0dAiIvB6CldCaXdC7VdV0ZOLdrTvHyUUi2Uqs6U1ODs17s+hnicIzjuy0OkxSBzQ4EOBFQRkQsipt3dLdE7o3n6NxwJ9gnbwO3x3q5Lr8Hio4invLXiuT9ORR16MqUrPTgERFKNJ6iIgPERfL3AAkmgAqScgBtQEXp7SPQx4ftH4N+qNruXvVIW5pS2maVzzlk0bmDL581prj8fiv8AUVbr6Vkurn2+Vi9w1H4ULcXr76AiIoRICIiAxW21MijfI80a0VO87gO8nBcu0lbnzyukecTkNjW7GhWS/ekKuZADg36R/e4+qOQqeYVSXSbKwyhT+K9ZeX516rFVjarlLcWi8wiIrYghERAEREAREQGSzWh8b2vY7Vc01B7/AJLp+h9IttELZG4E4Ob2ZBmP62ELlisNy9IdHaOjJ6s3V7hIPVPPEcwq3aeGVWk5pfNHPs4r7rpJeDrbk916Pz4F+REXLlwEREAVuuzpLXZ0Tj1mDqk+0z5j5KorNZbQ6N7Xtzaajv3g9xGClYTFPD1VPhxXNfjVGmvRVWG7x4dZ0dFhss7ZGNe31XCv8lmXZJpq60KBq2TPURFkHigb1W3ViEYOMhx+wM/E0Hip5US8Fq6S0SGuDfo28G5+dVW7VrfDw7S1ll6+GXW0S8FT36t3os/TxI1ERcoXQREQBCaItHT8/R2Wd1aHoy0Hvd1R5leoxc5KK1eXfkYbsm3wObaRtRlmlkPtvLh9nJo8KBa68Xq7dJRVlojnm282ERFkwFn0fY3zTRQsHXle2Nu2hcaV4DPksC6h6KrsFo/TZW0LmltnaRiGH1pOYwHdU7QsHqKu7FEvToo2W22iGh1WvLo67YndZnHA04gqKXZPSXdg2qETxNrPA01aBjLDmWje4ZjiRtXGgUQkrM9REWTyF9RvLSHA0LSHA7nA1BXyiA63ZJxJGyQZPYJBzFaLIoS5s+tY2CuLHuj89YeTgptcTWp/DqShybXj6HQU5b0VLmvfiERFrPYREQFmujbfXhJy67fzD3HxVnXO9H2nopY39l1Twyd5Eroi6jZFffobj1jl2PT7rqSKfHU92pvLj5+7M9REVqQjWts+pFI/stJHeaYea50rpep9LMR2ntb+b8qpa5rbU71ow5K/e/wi22fG1Ny5vy9sIiKnJ4REQBQF95KWQjtyMb4Vd+VT6rN/nfQQjfLXwa75qVgY3xMOvyzNOIdqUuopMcbnV1Wl1GlxoCaNGZO4DevhX/0b6JZLZrc5wxlBsoJ2N1KnzcPuhUF7C0lpFCCWkbnDAhdeUjVjxeLPZbNJK9sccbpHuNGsYC5x5D3rp9z/AEctjLZrZqyPGLbOCHRMP1z7Z7suKBRb0IW4Nx3WgttFpYW2cdZkbhR0+4kbI/xcM+ugbBgBhhkAvV6vDdzfGNguZekG4xJfarIypNXzQNFSTmZIwMzvbtzG5dNRE7CUbn5kXq7JfG4MVqLpoC2G0HEjKKY/WA9V31hzBzXJdJaOns8hjmidE8bHDAje05OHeF7TuaJRaNVfbo3ANJaQHV1SQaOoaGh20KxroV4NDBmg7NVtHw6kp3gzHrjxePuhAlc0/R/J9HO3c9rvvCn5ValTPR+7r2gfVYfAu+aua5TaStip9j/6oucI/wBzHt82ERFBJAREQBXzQNo17PEdoGoeLcPcAqGrVc6TqSM7JDvvCnwVrsepu4jd/qT71n5JkPHRvSvyZZERF1BTFavm/qwt3lx8AB8VVlY75u60I7nHzHyVcXI7Tk3ip9Fl4IvMIrUY9vmwiIoBJCIiAKqX/wD2cH+o78Ktaq9/x9FAf8wjxb/JTdnfzUOt+TNGK/gy98Sf9F1P0F//AHD6/dYsNp9HJtFtmlM7YrO9/SUYNaYvcKvArg0a1TXHPJafootopaYCcatnaN4I1HeFGeK6XYjg4d/9e5dU8mVUUnFGtoPQNlsjNWCEMr6zz1pX/aecTwy3BQfpBvdNYTBHBHGXyNMjpJWlzQ0GlAARU88OauC0NMaGstra1logEoYatNXNeyudHNINDQYdyzF55mJxdrI1bo6bdbbEyd0YjfrujeG11C5vtNrsII4YhTKw2OyxQxsihjbHGwUaxuQ2k95JJNdtVmWJanqCaWYWlprSAs1ltFo1NcxRlwZWms7IVOwVIqd1Vur4exrmua9rXte0scxwBa5pFCCDmKItTM7tWRRri36tFstRs88UXWY57Hwtc3ULcaEEmopt99VbtK6Ks9pjMc8LZW7A7Np3tcMWnvCxaHu/YrI57rPZmxveKF2s97g3PVBcTQZYDcFJrMmmeKcWk7nMdIei8NmjfFPrQdI0yRzftGx1xDXAUduxpzU3fyn/AObaq9llOPSMVrth6vMKg+k+2hljbFXrTSgU26jOs48K6g5rF7mWkkyq3A/bT/6Y/ErqqXcBv0s5+o0eJPyV0XMbU/mpdnkiywf8FdvmERFXkoIiIAp+5zqSyN3x18HD/wBlAKaukf1g98bh5tUzZ7tiodf2ZoxK/cy6i6IiLsSiKpfMdaHg73hVxWe+TMIT3vHjqn4FVhchtNWxU+z/AMou8I/3Me3zYREUEkhERAFWr+t/VozumHm16sqg76srY3nsvY7/AJav5lKwTtiIda8TTiFelLqKPonSMlnmZNGaOacj6rmnNp7iF1+598YLXJ0QY+OUsLyx1C3q0rquGee0BcVU3ci29DpGyPrQGURHhIDH73A8l17RSxk0d/REXgkBERAEREAREQFZvheiz2Po2yCRznhz2sjaCSBQYkkAZrj14tNy2yYyvGqANVkYNWxs3V2nedqnPSnbek0k9oNRDEyLu1iNc/jA5KoL2kR5yu7Fu9HzcbSe6MfjVxVXuAz6GZ2+UN8Gg/mVoXJ7Sd8VPs8Ei4witRj74hERQiQEREAU1dQfrH+274KFU9c9tZnu3RkeLm/IqXgFfEw6/JNmjE/wZdRcERF2RQkHetlbOT2XtPI1b8VTV0PSNn6SGRm1zCB9rMedFzxcztqFq0Zc15PPzRb7Plem48n5hERVBOCIiAKOvLHrWO0DdHrfdId8FIrHa4teORnaY5viCF7py3Jxlyafdn9jEleLXQckQEjEEgjEEZgjIrwL1du9TnT9DXb0s21WSGdtKvbR4HsyjB48a8qKUXD7g3q/QpiySps8pHSUxMb8hIBwwI2gDcAu2RStc1rmuDmuAc1zSC1zTkQdoXhqxIhK6MiIiwewiIgC1rfbGQxSSyHVZGwvce4DZ3rOVyL0k3uFod+iwOrAx1ZHjKaQZAb2NPicdgJJXPMpWRTNI2x000szvWlkdIRu1iTTgMuS10RbCMdCuTHSxg9uR7vAhv5VOqPu5Fq2SzjfGHfe63xUguMxMt6tOXS+6+XgX9JWpxXQvIIiLQbAiIgCtFzourK/eWtHIE/mVXV5u7BqWaMHN1Xn+I4eVFabIp72I3uSb78vuyHjpWpW5tepKoiLqSmPFQNM2bo7RI2lATrN4Ox+Y5K/qvXtsesxsoGLMHfZOR5H3qs2tQ+Jh95axz7OPr2EzBVNyrbnl6FTREXKlyEREAREQHKtJw6k8zOzK8DhrGnlRaqm732cttslAT0ga8ACpNRqmnNpWxdq6ktpnY2SsMZq5xNOkLRiQ0bCd5y7122Gbq0ozWeSb7s79pz9a0JuL5kLYNHTzkiGCSUjPo2l1OJyC7nd2A2azQQnHo42td9ulXU5krZ0fYIoI2xxRtjY3JrfMk7Sd5WZ7KrZKJiE0nmbccgdiDy2hZFF0IO5ZBaH9rxAK1ki5ILHJIAKk0HvWhJaJTk4cgAVqu1icak9+JQXM1utPSNcylGOBa7e4EUK4XpXQtosxIlgkY3WLGyOaQx9DQEOyxzXd4LPTE4nyCyWiBj2OY9jXscKOa4BzXDvBWxRI85J6H51QAnAZnAcVb743ONnm/V+vG8a4YT148aFuPrDcc/eYDQ9lcbXZ2OaQelaS1wINGnWOB7gUqN0ofEksrX7unQ8x+eW6nnodMhjDWtaPZaGDkKL7RFwufE6MIiIAiIgM9kgMkjGD2nActp8KrojGgAAYACg4BVa6Njq98pGA6jeJzPh71a102x6G5RdR6y8lkvu+qxUY+pvTUVw837R6iIrcgnixzRB7XNcKtcCCN4KyIgOd26yuikfGfZOB7Q2eS1lcbyaO6Vmu0deMbMyzaOIz8VTlxuNwrw9Vx4PNdX408eJf4et8WF+PEIviaZrc89wzWlLbHHLDhn4qXgNi4rGJSit2H9Usl2K132K18rmjE4+jQyk7vkte3gu3PoN6SRrczy2rVktvZFe8/JaSLrMH+zWEo51bzl05R/tWv8Aycilr7XrVMofKujN97+yR9PNXaxoXUpWgrTdwWxou09HNG85B2P2TgfIrVRX6pxUNxK0dLLJW6EVm9Jy3m8zpCKDu1pQPaInnrNHUJ9po2cR7lOLnqlN05OMvfSWcJqSujwiqxui3LKtPS9q6OB7q401W/aOA+fJeFDfaS1Z739xXM0bNYAg4EVBGNQVla0DJRd2rVrwBtcY+oeHs+WHJSq9TpfDm48mYVRzimERRmndJiFmq0/SOHV+qO0fgswg5yUY6sxKSirsrt4rSH2h1DUMHRjvIz8yfBRoGIdhUZGgqOC8RdBGnGMNzhaxVuTct7ibkdtp6wr9YYFbUUzXZHHccColFR4v9m8HXzpr4cv9un9undu9JY0NrV6eUvmXTr3+tyZRR0VqcNusNx+a3IbQ12GR3Fcpj9hYrBpza3oL9UeHWtV15pcWXeG2jRr/ACp2lyf2ej8H0GVfcMTnua1oqXEADvK+Fabr6NoOlcMTgzuG13PLx3qvwuGeIqKC04vkvenSSa1VUoOXcTdgsoiiZGPZGJ3uzJ8Vsoi7OMVFJLRFA227s9REWTB4UQogCp949F6jjKwdRx6wHsE/A/1sVwXxLG1zS1wDg4UIORBUXGYWOJpODyfB8n71X4N1Cs6U95acVzOQTvq4nef7LGpy8mgHWZ2s2roXHquzLD2XfAqDXWUHT+HFU/pSSS5JZW7Clqb289/XV9oREWw8BERAetcQQQSCDUEYEHerTom8LXANmOq7LpPZdx3HyVVRaq1CFVWl+T3Co4O6OhyWuIN1jKwN36wpy3qo6d0p0zwG1EbfVrgXHa4qKoi00MHGlLevdmypXc1bQ3tE6QMEmsBVpwe3e35hXKz26J7dZsjSOIBHEHJc/SiziMJGq73szFKu4K2qLhpTT8cYIjIkfvGLG8Tt4BVKaVz3FznFziaknavhFsoYeFFfLrzPNSrKbzCIi3GsIiIAvprqEEbMF8qT0HoaS0yaratY315KYNG4b3LEpRjFuWnH375GYpt2jqTOgtGmdwJBEYoT3nPVCvDWgAAClMABkAsNksrImNjjbRrRQD4neVsLj8Jg6eGi4w48eNuC7F7zL2vXlWacvfPvYREUs0HqIiA8KIUQBERAY5omua5r2hzXChaRUEblQbxXYfDWSIF8WZGb4uO9vf4710JFuo15UpXj3HipTU1ZnGUV907dNktXw0ifmWZRvP5T5Kk2yxyRP1JI3MducM+8HIjgrmjiIVfp15FfUpShqYERFvNYREQBERAEREAREQBERAEWSCF73BrGOe45NaCSVctCXPAo+0UJzEINWj7R28BhxWmtXhSV5Ps4++l2PcKcp6EJoC70lpIcashBxfTF28M38ch5LodjskcTGxxtDWtyA95O0rM1gAAAAAFAAKABfSpq+IlWd3pwXvj0lhTpRgsgiItBsCIiA9REQHhREQBERAEREAWtbLHHK3Ukja9u5w9x2HvC2UQFL0lcrM2eT/bl9wcPiOarFt0bPCaSQvZ3kVbycMD4rra+S0UpSvHJTaeOqRylmvfEjyw0HpkcbRdPtl3LHJiYGtJ9qMmM8aDA8woie40f7u0Pb3Pa1/uopkMfSet0aJYaa0KOitMlyLQPVmhd9rXZ8Ctc3Otf+WeEh+S3LFUX+pHj4NTkV5FYRc22bo//ACfyWaO5FpPrSwN4F7j+EI8TRX6kY+DPkVhFdrPcZv7y0uPcxgb5klStkuvY4/3PSHfKS+v8Pq+S1Sx9JaXfYbFhps55ZLHLKaRxPkP1QSBxOQ5qy6NuU91DPIGDsR0c/gXZDlVXZjAAA1oaBsAAA5L7UOpj6kso5efvqRvjhorXM09H6NhgbqxRtZvObjxccStxEUJtvNkgIiLACIiAIiID1ERAEREAREQBERAEREAREQBERAERFkBERYAREQBERAEREAREQBERAEREAREQH//Z'
				title='Random User 3'
			/>
			<Story
				image='https://images.pexels.com/photos/2773703/pexels-photo-2773703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU'
				title='Random User 4'
			/>
			<Story
				image='https://images.pexels.com/photos/2609760/pexels-photo-2609760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjf9f4AWawRj9UcFq1sTTfxuzDezEGBGx7Kw&usqp=CAU'
				title='Random User 5'
			/>
		</div>
	);
};

export default StoryReel;
