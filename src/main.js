import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// ÍCONES
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    BiGithub, BiLinkedin, BiInstagram, ViFileTypeHtml, ViFileTypeCss, CoJavascript, ViFileTypePhp3, 
    ViFileTypeVue, SiLaravel, ViFileTypeDocker, ViFileTypeTailwind, ViFileTypePython, CoLocationPin,
    MdEmail, CoPhone, GiWorld 
 } 
from "oh-vue-icons/icons";

addIcons(BiGithub, BiInstagram, BiLinkedin, ViFileTypeHtml, 
    ViFileTypeCss, CoJavascript, ViFileTypePhp3, 
    ViFileTypeVue, SiLaravel, ViFileTypeDocker, 
    ViFileTypeTailwind, ViFileTypePython, CoLocationPin, 
    MdEmail, CoPhone, GiWorld, GiWorld
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.mount('#app');
