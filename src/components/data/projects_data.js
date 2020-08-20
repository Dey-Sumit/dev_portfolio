import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react.js']
    },

    {
        name: 'Dev Talks',
        image: Dev_talks,
        deployed_url: 'https://dev-talks.herokuapp.com/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['node.js', 'mongoDB', 'react.js']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: 'https://sumit-chat.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
        category: ['node', 'socket.io', 'react']
    },

    {
        name: 'Tweeter Clone',
        image: tweetme,
        deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
        github_url: 'https://github.com/Dey-Sumit/tweetme',
        category: ['django', 'react']
    },

    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: '!#',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: 'http://suprateem.herokuapp.com/',
        category: ['vanilla']
    },

    {
        name: 'Bengali New Year',
        image: new_year,
        deployed_url: 'https://dey-sumit.github.io/NewYear/',
        category: ['vanilla']
    },

    {
        name: 'Color Classification using tf.js',
        image: color_classification,
        deployed_url: '!#',
        github_url: 'https://github.com/Dey-Sumit/color-classification',
        category: ['node', 'machine_learning']
    },

    {
        name: 'Blinking bubbles',
        image: blinking,
        deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
        category: ['processing']
    }
]

export default data_projects;