using { managed } from '@sap/cds/common';

namespace app;

entity Users : managed {
  id: Integer primary key;
  email: String unique not null;
  password: String;
  name: String not null;
}

entity Products : managed {
  id: Integer primary key;
  name: String not null;
  description: String;
  price: Decimal(10, 2) not null;
  category: String;
  quantity: Integer default 0;
  image: String;
}

entity Orders : managed {
  id: Integer primary key;          
  orderNumber: String unique;
  total_price: Decimal(10, 2);

  usuarios: Association to Users;
  
  items: array of {
    product: Association to Products;
    quantity: Integer;
    price: Decimal(10, 2);
  };
}