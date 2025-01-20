export class StockService {

    constructor(private http: HttpClient) {
    }
  
    getStocks(): Observable<Stock[]> {
      return this.http.get<Stock[]>('/api/stock');
    }
  
    createStock(stock: Stock): Observable<any> {
      return this.http.post('/api/stock', stock);
    }
  
    toggleFavorite(stock: Stock): Observable<Stock> {
      return this.http.patch<Stock>('/api/stock/' + stock.code, { favorite: !stock.favorite });
    }
  
    // always returns http 403
    makeFailingCall() {
      return this.http.get('/api/fail');
    }
  
    getStocksQuery(query: string) : Observable<Stock[]> {
      const options = { params: new HttpParams().set('q', query) };
      return this.http.get<Stock[]>('/api/stock', options);
    }
  }