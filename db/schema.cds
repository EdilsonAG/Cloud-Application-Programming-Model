using { managed } from '@sap/cds/common';

namespace app;

entity Users : managed {
  id: Integer;
  email: String not null;
  password: String;
  name: String not null;
}

entity Products : managed {
  id: Integer;
  name: String not null;
  description: String;
  price: Decimal(10, 2) not null;
  category: String;
  quantity: Integer default 0;
  image: String;
}

entity Orders : managed {
  id: Integer;          
  orderNumber: String;
  total_price: Decimal(10, 2);

  usuarios: Association to Users;

  items: array of {
    product: Association to Products;
    quantity: Integer;
    price: Decimal(10, 2);
  };
}
