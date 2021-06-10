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
