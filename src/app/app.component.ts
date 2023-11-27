import { ChangeDetectorRef, Component, Input, booleanAttribute, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ng-17-comment-list',
  template: `comments {{ expanded }}`,
  standalone: true
})
export class CommentListComponent {
  @Input({ transform: booleanAttribute }) expanded: boolean = false;
}

@Component({
  standalone: true,
  imports: [RouterModule, CommentListComponent],
  selector: 'ng-17-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-17';

  cdr = inject(ChangeDetectorRef);

  loggedIn = false;

  accessLevel = 'admin';

  users: { name: string; id: number }[] = [
    { name: 'John', id: 1 },
    { name: 'Jane', id: 2 }
  ];

  constructor() {
    // afterNextRender(
    //   () => {
    //     this.loggedIn = true;
    //   },
    //   { phase: AfterRenderPhase.MixedReadWrite }
    // );
  }
}
