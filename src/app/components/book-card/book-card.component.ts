import { Component, inject, input, numberAttribute, output } from '@angular/core';
import { Book } from '../../model/book';


@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  book = input<Book>()
  bookSelected = output<Book | undefined>();


  resizeTitle(title: string, maxWords: number) {
    const wordsArray = title.split(' ');
    const resizedArray = wordsArray.slice(0, maxWords);
    let restitle = resizedArray.join(' ');
    if (title.length !== restitle.length) {
      restitle += '...'
    }
    return restitle
  }

  selectedBook() {
    this.bookSelected.emit(this.book())
  }
}
