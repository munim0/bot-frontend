import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  telegram: any = (window as any).Telegram.WebApp;

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  getUserId(): any {
    return this.telegram.initDataUnsafe.user.id
  }
  showMainBtn(price: number): void {
    this.telegram.MainButton.show();
    this.telegram.MainButton.setText(`Перейти в корзину ${price}`);
    this.telegram.onEvent('mainButtonClicked', () => {
      this.router.navigate(['telegram/basket']).then();
    });
  }

  sendExampleData(data: any): Observable<any> {
    const queryId = this.telegram.query.id;
    return this.http.post('http://localhost:3000/orders', {
      queryId,
      result: data,
    });
  }

  sendDataExample(): void {
    this.telegram.sendData('Example text');
  }

  orderButton(price: number, data: any): void {
    this.telegram.MainButton.show();
    this.telegram.MainButton.setText(`Заказать (${price})`);
    this.telegram.onEvent('mainButtonClicked', () => {
      localStorage.removeItem('city');
      localStorage.removeItem('foods');
      console.log(data);
      this.telegram.sendData(JSON.stringify(data));
    });
  }

  hideMainButton(): void {
    this.telegram.MainButton.hide();
  }
}
