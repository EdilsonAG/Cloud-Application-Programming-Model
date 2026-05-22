using { app } from '../db/schema';

service CatalogService {
  entity Products as projection on app.Products;
  entity Orders as projection on app.Orders;
  entity Users as projection on app.Users;
}