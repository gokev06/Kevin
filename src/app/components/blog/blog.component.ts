import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  icons: { class: string; top: number; left: number; duration: string; transform: string;    animation: string  }[] = [];

  ngOnInit() {
    const baseIcons = [
      { class: 'bx bx-code-alt' },
      { class: 'bx bxl-angular' },
      { class: 'bx bxl-typescript' },
      { class: 'bx bxl-nodejs' },
      { class: 'bx bxl-css3' },
      {class:'bx bxl-react'},
      { class:'bx bxl-vuejs' },
      {class:'bx bxl-postgresql'},
      {class:'bx bxl-visual-studio'},
      {class:'bx bxl-php'},
      {class:'bx bxs-data'},
    ];
  
    this.startTypingEffect();
      this.icons = baseIcons.map(icon => this.generateRandomIcon(icon));4

  }
  
    generateRandomIcon(icon: { class: string }) {
      const animations = ['float', 'zigzag', 'rotate', 'circular'];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  
      return {
        ...icon,
        top: Math.random() * 90 + 5, // Posición inicial aleatoria
        left: Math.random() * 90 + 5,
        duration: `${Math.random() * 5 + 5}s`, // Duración de animación entre 5 y 10s
        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 1.5 + 0.5})`,
        animation: randomAnimation // Asigna una animación aleatoria
      };
    }

    words: string[] = ["Developer Web"];
    animatedText: string = "";
    wordIndex: number = 0;
    charIndex: number = 0;
    isDeleting: boolean = false;
  
  
    startTypingEffect() {
      setInterval(() => {
        let currentWord = this.words[this.wordIndex];
  
        if (!this.isDeleting) {
          if (this.charIndex < currentWord.length) {
            this.animatedText += currentWord[this.charIndex];
            this.charIndex++;
          } else {
            setTimeout(() => {
              this.isDeleting = true;
            }, 1000); // Pausa antes de borrar
          }
        } else {
          if (this.charIndex > 0) {
            this.animatedText = this.animatedText.slice(0, -1);
            this.charIndex--;
          } else {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length; // Cambia a la siguiente palabra
          }
        }
      }, 150); // Controla la velocidad de aparición y desaparición
    }
  
}
