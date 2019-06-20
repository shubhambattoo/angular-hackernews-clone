import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  constructor() { }

  ngOnInit() {
  }

  showDropDownEvent() {
    this.showDropdown = !this.showDropdown
  }

  changeTheme(theme) {
    this.showDropdown = false;
    if (theme === 'dark') {
      document.querySelector('body')
        .classList.add('dark')
    } else if (theme === 'default') {
      document.querySelector('body')
        .classList.remove('dark')
    }

  }

}
