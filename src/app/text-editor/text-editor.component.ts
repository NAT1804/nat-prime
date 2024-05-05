import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Editor, EditorModule } from 'primeng/editor';

@Component({
  selector: 'nat-text-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, EditorModule, ButtonModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss',
})
export class TextEditorComponent implements AfterViewInit {
  @ViewChild(Editor) editor!: Editor;
  text: string =
    '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  @Output() clickReadmoreBtn = new EventEmitter<string>();

  show = false;

  ngAfterViewInit(): void {
    console.log(this.editor.el.nativeElement);
    console.log(this.editor.el.nativeElement.getBoundingClientRect());
    if (this.editor.el.nativeElement.getBoundingClientRect().height > 190) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  handleTextChange($event: any) {
    console.log($event);
    console.log(this.text);
    if (this.editor.el.nativeElement.getBoundingClientRect().height > 190) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  handleClickReadMoreBtn() {
    this.clickReadmoreBtn.emit('CLICK_READMORE_BTN');
  }
}
