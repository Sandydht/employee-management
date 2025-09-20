import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Appbar } from "../../components/appbar/appbar";

@Component({
  selector: 'app-content-container',
  imports: [
    RouterOutlet,
    Sidebar,
    Appbar
],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css'
})
export class ContentContainer {

}
