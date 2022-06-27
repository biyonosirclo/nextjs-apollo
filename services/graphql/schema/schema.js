import { gql } from '@apollo/client';

export  const GET_CATEGORIES = gql`

  query GetCategories {
    categories(filters:{}){
      items {
        id
        name
        product_count
      }
    }
    
  }
`;

export  const GET_CATEGORIES_BY_ID = gql`

  query GetCategoriesById ($categoryId:Int){
    category(id: $categoryId){
      name
      products{
        items{
          id
          name
          sku
          image{
            url
          }
          price_range{
            minimum_price{
              regular_price{
                currency
                value
              }
            }
            maximum_price{
              regular_price{
                currency
                value
              }
            }
          }
          rating_summary
        }
      }
    }
  }
    
`;

export  const GET_PRODUCT_BY_SKU = gql`
  query GetProductBySku ($sku:String){
    products(
      search: ""
      filter: {sku: {eq: $sku}}
    ) {
      items {
        
        name
        image{
          url
        }
        
        description{
          html
        }
        price_range{
          minimum_price{
            regular_price{
              currency
              value
            }
          }
          maximum_price{
            regular_price{
              currency
              value
            }
          }
        }
        meta_title
        meta_keyword
        qty_available
        meta_keyword
        rating_summary
      }
    }
  }
`;


export  const POST_SUBCRIBE =  gql`
  mutation PostSubcribe($email: String!) {
    
    subscribe(input: {email: $email}) {
         status {
           code
           message
           response
         }
      }
  }
`;


