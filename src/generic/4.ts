/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

class Page<T extends { title: string }> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
