import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class AdminpageService {


  constructor(private http:HttpClient) {} 


  Getdata():Observable<any>{
    console.log("wefhm")
    return this.http.get("http://127.0.0.1:8000/news_app/Staging_db/");
  }



  private baseUrl = 'http://127.0.0.1:8000/news_app/staging_to_production/transfer_to_production/';

  transferData(id: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}${id}/`, {});
  }


  // private baseUrls = 'http://127.0.0.1:8000/news_app/';
  updateNews(id: string, data: any): Observable<any> {
    return this.http.put<any>(`http://127.0.0.1:8000/news_app/Staging_db/${id}/`, data); // http://127.0.0.1:8000/news_app/Staging_db/0b21c12e-feb8-49a5-870f-18bce2f55114/
  }

  
   private apiUrls="http://127.0.0.1:8000/news_app/Staging_db/"
  deleteNews(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrls}${id}/`);
  }
  
  productionnews():Observable<any>{
    
    return this.http.get("http://127.0.0.1:8000/news_app/production_db/");
  }

  private apiview="http://127.0.0.1:8000/news_app/production_db/"
  deleteFromProduction(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiview}${id}/`);
  }


  getCategories(): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/news_app/category/`);
  }

  getSubCategories() {
    return this.http.get(`http://127.0.0.1:8000/news_app/sub_category/`);
  }



  getSubcategoriesbyId(categoryId: string): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/news_app/sub_category_by_id/${categoryId}/`);
  }

  


}





// getNewsItemById(id: any): Observable<any> {
//   return this.http.get('http://127.0.0.1:8000/news_app/Staging_db/' + id + '/');
// }
