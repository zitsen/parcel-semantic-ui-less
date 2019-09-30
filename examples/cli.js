import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Demo from '../src/index'

let demo = <Demo />

let strings = ReactDOMServer.renderToString(demo)

console.log(strings)