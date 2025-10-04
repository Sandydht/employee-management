import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Appbar } from "../../components/appbar/appbar";
import { UserService } from '../../services/user-service/user';
import { ProfileResponse } from '../../models/user';
import { Store } from '@ngrx/store';
import { getProfile } from '../../store/user/user.actions';
import { selectProfileValue } from '../../store/user/user.selector';
import { Observable } from 'rxjs';
import { UserState } from '../../store/user/user.reducer';
import { StorageService } from '../../services/storage-service/storage-service';

@Component({
  selector: 'app-content-container',
  imports: [
    RouterOutlet,
    Sidebar,
    Appbar,
  ],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css'
})
export class ContentContainer implements OnInit {
  user$!: Observable<UserState | null>;

  constructor(
    private readonly userService: UserService,
    private readonly storeService: Store,
    private readonly storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.userService.profile()
      .subscribe({
        next: (response: ProfileResponse) => {
          if (response.status == 'OK' && response.data) {
            this.storageService.setItem('userId', response.data.id);
            this.storeService.dispatch(getProfile({ user: response.data }));
            this.user$ = this.storeService.select(selectProfileValue);
          }
        }
      })
  }
}
