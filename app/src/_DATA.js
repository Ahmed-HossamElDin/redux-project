let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'data:image/jpeg;base64,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',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'data:image/jpeg;base64,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',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&usqp=CAU',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
