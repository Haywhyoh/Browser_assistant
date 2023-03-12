import React from "react";
import {createRoot} from 'react-dom/client';
import './popup.css';
const test = (
  <div class="main">
     <div ><img className="feature_icon" src="./icon_48.png" /></div>
    <div ><img className="feature_icon" src="./chat.svg" /></div>
    <div ><img className="feature_icon" src="./games.svg" /></div>
    <div ><img className="feature_icon" src="./screenshot_48.svg" /></div>
    <div ><img className="feature_icon" src="./shop-assistant.png" /></div>
    <div ><img className="feature_icon" src="./youtube_48.svg" /></div>
  </div>
)

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container)
root.render(test)