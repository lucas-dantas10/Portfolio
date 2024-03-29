import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// ÍCONES
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    BiGithub, BiLinkedin, CoLeetcode, ViFileTypeHtml, ViFileTypeCss, CoJavascript, ViFileTypePhp3, 
    ViFileTypeVue, SiLaravel, ViFileTypeDocker, ViFileTypeTailwind, ViFileTypePython, CoLocationPin,
    MdEmail, CoPhone, GiWorld, BiArrowUpCircleFill, ViFileTypeTypescriptOfficial, SiPrisma, ViFileTypeNode, ViFileTypeCsharp2, BiWhatsapp, IoPulse
 } 
from "oh-vue-icons/icons";

addIcons(
    BiGithub, BiLinkedin, CoLeetcode, ViFileTypeHtml, 
    ViFileTypeCss, CoJavascript, ViFileTypePhp3, 
    ViFileTypeVue, SiLaravel, ViFileTypeDocker, 
    ViFileTypeTailwind, ViFileTypePython, CoLocationPin, 
    MdEmail, CoPhone, GiWorld, GiWorld, BiArrowUpCircleFill, ViFileTypeTypescriptOfficial, SiPrisma, ViFileTypeNode, ViFileTypeCsharp2, BiWhatsapp,
    IoPulse
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.mount('#app');
