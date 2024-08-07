import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminpageService } from '../adminpage.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

// Define interfaces
interface Category {
  _id: string;
  name: string;
}

interface Subcategory {
  _id: string;
  name: string;
}


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private adminservice:AdminpageService, private router: Router){}
  // medianews:any;
  // ids:any;

  // ngOnInit() {
  //   this.fetchnews();
  // }
  
  // fetchnews(): void {
  //   console.log("wderftghj")
  //   this.adminservice.Getdata().subscribe(
  //     data => {
  //       this.medianews = data;
  //       this.ids = this.medianews.map((news: any) => news._id); 
  //       console.log("Extracted IDs:", this.ids);
  //       console.log("idddddddddddddddddddd",this.ids)
  //       console.log(this.medianews,'jhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhd')
  //     }
  //   );
  // }

  // transfer(id: any): void {
  //   this.adminservice.transferData(id).subscribe( 
  //     response => {
  //       console.log('Data transferred successfully:', response);
  //       this.fetchnews();
  //     },
  //     error => {
  //       console.error('Error transferring data:', error);
  //     }
  //   );
  // }




// it is totally working

//   medianews: any = [];
//   ids: any = [];
//   isEditingId: string | null = null;
//   editedNewsItem: any = {};
//   productiondata: any = [];

//   ngOnInit() {
//     this.fetchnews();
//     this.productionnews();
//   }

//   fetchnews(): void {
//     this.adminservice.Getdata().subscribe(
//       data => {
//         this.medianews = data;
//         console.log("newshjbkjjhkljlk,;l,;l",this.medianews)
//         this.ids = this.medianews.map((news: any) => news._id);
//       }
//     );
//   }

//   transfer(id: any): void {
//     this.adminservice.transferData(id).subscribe(
//       response => {
//         console.log('Data transferred successfully:', response);
//         this.fetchnews();
//       },
//       error => {
//         console.error('Error transferring data:', error);
//       }
//     );
//   }

//   startEditing(newsItem: any): void {
//     this.isEditingId = newsItem._id;
//     console.log("gggggggggggggggggggg", this.isEditingId)
//     this.editedNewsItem = { ...newsItem };
//   }


//   saveChanges(): void {
//     if (this.isEditingId) {
//       const updateItem = {
//         headline: this.editedNewsItem.headline,
//         summary: this.editedNewsItem.summary,
//         // Prevent changing link and URL
//         link: this.medianews.find((news: any) => news._id === this.isEditingId).link,
//         url: this.medianews.find((news: any) => news._id === this.isEditingId).url
//       };
//       this.adminservice.updateNews(this.isEditingId, updateItem).subscribe(
//         response => {
//           console.log('News updated successfully:', response);
//           this.fetchnews();
//           this.isEditingId = null;
//           this.editedNewsItem = {};
//           console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",this.editedNewsItem)
//         },
//         error => {
//           console.error('Error updating news:', error);
//         }
//       );
//     }
//   }

//   cancelEdit(): void {
//     this.isEditingId = null;
//     this.editedNewsItem = {};
//   }

//   deleteNews(id: any): void {
//     this.adminservice.deleteNews(id).subscribe(
//       response => {
//         console.log('News deleted successfully:', response);
//         this.fetchnews();
//       },
//       error => {
//         console.error('Error deleting news:', error);
//       }
//     );
//   }

//   productionnews(): void {
//     this.adminservice.productionnews().subscribe(
//       data => {
//         this.productiondata = data;
//       }
//     );
//   }

//   toggleSelectAll(event: any): void {
//     const isChecked = event.target.checked;
//     this.medianews.forEach((news: any) => news.selected = isChecked);
//     console.log("checked item ", this.medianews)
//   }

//   moveSelected(): void {
//     const selectedItems = this.medianews.filter((news: any) => news.selected);
//     selectedItems.forEach((item: any) => {
//       this.adminservice.transferData(item._id).subscribe(
//         response => {
//           console.log('Data transferred successfully:', response);
//           this.fetchnews();
//         },
//         error => {
//           console.error('Error transferring data:', error);
//         }
//       );
//     });
//   }


// // without popup

//   // deleteSelected(): void {
//   //   const selectedItems = this.medianews.filter((news: any) => news.selected);
//   //   selectedItems.forEach((item: any) => {
//   //     this.adminservice.deleteNews(item._id).subscribe(
//   //       response => {
//   //         console.log('News deleted successfully:', response);
//   //         this.fetchnews();
//   //       },
//   //       error => {
//   //         console.error('Error deleting news:', error);
//   //       }
//   //     );
//   //   });
//   // }

//   deleteSelected(): void {
//     const selectedItems = this.medianews.filter((news: any) => news.selected);
//     selectedItems.forEach((item: any) => {
//       if (confirm('Are you sure you want to delete this news item?')) {
//         this.adminservice.deleteNews(item._id).subscribe(
//           response => {
//             console.log('News deleted successfully:', response);
//             this.fetchnews();
//           },
//           error => {
//             console.error('Error deleting news:', error);
//           }
//         );
//       }
//     });
//   }


//   // deleteProduction(id: any): void {
//   //   this.adminservice.deleteFromProduction(id).subscribe(
//   //     response => {
//   //       console.log('Production data deleted successfully:', response);
//   //       this.productionnews(); // Refresh the production data list
//   //     },
//   //     error => {
//   //       console.error('Error deleting production data:', error);
//   //     }
//   //   );
//   // }


//   deleteProduction(id: any): void {
//     if (confirm('Are you sure you want to delete this production data?')) {
//       this.adminservice.deleteFromProduction(id).subscribe(
//         response => {
//           console.log('Production data deleted successfully:', response);
//           this.productionnews(); // Refresh the production data list
//         },
//         error => {
//           console.error('Error deleting production data:', error);
//         }
//       );
//     }
//   }





medianews: any = [];
ids: any = [];
isEditingId: string | null = null;
editedNewsItem: any = {};
productiondata: any = [];
categories:any;
subCategories:any;
selectedCategoryId: string | null = null;
filteredSubCategories: any[] = [];

ngOnInit() {
  this.fetchnews();
  this.productionnews();
  this.fetchCategories();
  this.fetchSubCategories();
}

fetchnews(): void {
  this.adminservice.Getdata().subscribe(
    data => {
      this.medianews = data;
      console.log("newshjbkjjhkljlk,;l,;l",this.medianews)
      this.ids = this.medianews.map((news: any) => news._id);
    }
  );
}

transfer(id: any): void {
  this.adminservice.transferData(id).subscribe(
    response => {
      console.log('Data transferred successfully:', response);
      this.fetchnews();
    },
    error => {
      console.error('Error transferring data:', error);
    }
  );
}



startEditing(newsItem: any): void {
  this.isEditingId = newsItem._id;
  this.editedNewsItem = { 
    ...newsItem,
    subcategory: newsItem.subcategory // Add this line
  };
}




saveChanges(): void {
  if (this.isEditingId) {
    const updateItem = {
      headline: this.editedNewsItem.headline,
      summary: this.editedNewsItem.summary,
      link: this.medianews.find((news: any) => news._id === this.isEditingId).link,
      url: this.medianews.find((news: any) => news._id === this.isEditingId).url,
      category: this.editedNewsItem.category,
      subcategory: this.editedNewsItem.subcategory // Add this line
    };
    this.adminservice.updateNews(this.isEditingId, updateItem).subscribe(
      response => {
        this.fetchnews();
        this.isEditingId = null;
        this.editedNewsItem = {};
      },
      error => {
        console.error('Error updating news:', error);
      }
    );
  }
}

cancelEdit(): void {
  this.isEditingId = null;
  this.editedNewsItem = {};
}

deleteNews(id: any): void {
  this.adminservice.deleteNews(id).subscribe(
    response => {
      console.log('News deleted successfully:', response);
      this.fetchnews();
    },
    error => {
      console.error('Error deleting news:', error);
    }
  );
}

productionnews(): void {
  this.adminservice.productionnews().subscribe(
    data => {
      this.productiondata = data;
    }
  );
}

toggleSelectAll(event: any): void {
  const isChecked = event.target.checked;
  this.medianews.forEach((news: any) => news.selected = isChecked);
  console.log("checked item ", this.medianews)
}

moveSelected(): void {
  const selectedItems = this.medianews.filter((news: any) => news.selected);
  selectedItems.forEach((item: any) => {
    this.adminservice.transferData(item._id).subscribe(
      response => {
        console.log('Data transferred successfully:', response);
        this.fetchnews();
      },
      error => {
        console.error('Error transferring data:', error);
      }
    );
  });
}




deleteSelected(): void {
  const selectedItems = this.medianews.filter((news: any) => news.selected);
  selectedItems.forEach((item: any) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      this.adminservice.deleteNews(item._id).subscribe(
        response => {
          console.log('News deleted successfully:', response);
          this.fetchnews();
        },
        error => {
          console.error('Error deleting news:', error);
        }
      );
    }
  });
}



deleteProduction(id: any): void {
  if (confirm('Are you sure you want to delete this production data?')) {
    this.adminservice.deleteFromProduction(id).subscribe(
      response => {
        console.log('Production data deleted successfully:', response);
        this.productionnews(); // Refresh the production data list
      },
      error => {
        console.error('Error deleting production data:', error);
      }
    );
  }
}


fetchCategories(): void {
  this.adminservice.getCategories().subscribe(
    data => {
      this.categories = data;
    },
    error => {
      console.error('Error fetching categories:', error);
    }
  );
}

fetchSubCategories(): void {
  this.adminservice.getSubCategories().subscribe(
    data => {
      this.subCategories = data; 
    },
    error => {
      console.error('Error fetching subcategories:', error);
    }
  );
}


getCategoryName(id: string): string {
  const category = this.categories.find((cat: any) => cat._id === id);
  return category ? category.name : 'No category';
}

getSubCategoryName(id: string): string {
  const subCategory = this.subCategories.find((subCat: any) => subCat._id === id);
  return subCategory ? subCategory.name : 'No subcategory';
}



onCategoryChange(event: Event): void {
  const target = event.target as HTMLSelectElement;
  this.selectedCategoryId = target.value;
  this.fetchSubCategoriesByCategoryId(this.selectedCategoryId);
}


// Method to fetch subcategories based on category ID
fetchSubCategoriesByCategoryId(categoryId: string): void {
  this.adminservice.getSubcategoriesbyId(categoryId).subscribe(
    data => {
      this.filteredSubCategories = data;
    },
    error => {
      console.error('Error fetching subcategories:', error);
    }
  );
}

}