import { Component, OnInit } from "@angular/core";
import { LocalstorageService } from "../services/localstorage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  theme: string;
  switch = false;
  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit() {
    this.theme = this.localstorageService.getItem("theme");
    this.switch = this.theme === "dark" ? true : false;
    this.changeTheme(this.theme);
  }

  showDropDownEvent() {
    this.showDropdown = !this.showDropdown;
  }

  switchTheme() {
    this.switch ? this.changeTheme("dark") : this.changeTheme("default");
  }

  changeTheme(theme) {
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
      this.localstorageService.setItem("theme", "dark");
    } else if (theme === "default") {
      document.querySelector("body").classList.remove("dark");
      this.localstorageService.setItem("theme", "default");
    }
  }
}
