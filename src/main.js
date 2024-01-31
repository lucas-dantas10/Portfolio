import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// ÍCONES
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    BiGithub, BiLinkedin, CoLeetcode, ViFileTypeHtml, ViFileTypeCss, CoJavascript, ViFileTypePhp3, 
    ViFileTypeVue, SiLaravel, ViFileTypeDocker, ViFileTypeTailwind, ViFileTypePython, CoLocationPin,
    MdEmail, CoPhone, GiWorld, BiArrowUpCircleFill, ViFileTypeTypescriptOfficial, SiPrisma, ViFileTypeNode, ViFileTypeCsharp2, BiWhatsapp
 } 
from "oh-vue-icons/icons";

addIcons(
    BiGithub, BiLinkedin, CoLeetcode, ViFileTypeHtml, 
    ViFileTypeCss, CoJavascript, ViFileTypePhp3, 
    ViFileTypeVue, SiLaravel, ViFileTypeDocker, 
    ViFileTypeTailwind, ViFileTypePython, CoLocationPin, 
    MdEmail, CoPhone, GiWorld, GiWorld, BiArrowUpCircleFill, ViFileTypeTypescriptOfficial, SiPrisma, ViFileTypeNode, ViFileTypeCsharp2, BiWhatsapp
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.mount('#app');
