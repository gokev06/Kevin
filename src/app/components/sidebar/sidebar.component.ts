import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  words: string[] = ["Back-End", "Front-End", "Full-Stack"];
  animatedText: string = "";
  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit() {
    this.startTypingEffect();
  }

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
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
