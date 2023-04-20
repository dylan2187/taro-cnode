const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: [],
}

export default function topiclist(prestate = TOPIC_STATE, action) {
  switch (action.type) {
    case 'getTopicList':
      return { ...prestate, list: action.list }
    default:
      return { ...prestate }
  }
}
