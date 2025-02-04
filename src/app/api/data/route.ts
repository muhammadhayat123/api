import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json([
      {
        id: 1,
        name: 'T-SHIRT WITH TAPE DETAILS',
        price: "120",
        originalPrice:"",
        discount: '',
        rating: 4.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      },
      {
        id: 2,
        name: 'SKINNY FIT JEANS',
        price: "240",
        originalPrice: "260",
        discount: '20%',
        rating: 3.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        name: 'CHECKERED SHIRT',
        price: "180",
        originalPrice: "",
        discount: '',
        rating: 4.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        name: 'SLEEVE STRIPED T-SHIRT',
        price: "130",
        originalPrice: "160",
        discount: '30%',
        rating: 4.5,
        ratingCount: 5,
        ratingImage:"/",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        name: 'VERTICAL STRIPED SHIRT',
        price: "212",
        originalPrice: "232",
        discount: '20%',
        rating: 5.0,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 6,
        name: 'COURAGE GRAPHIC T-SHIRT',
        price: "145",
        originalPrice: "",
        discount: '',
        rating: 4.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 7,
        name: 'FIT BERMUDA SHORTS',
        price: "180",
        originalPrice: "",
        discount: '',
        rating: 3,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 8,
        name: 'FADED SKINNY JEANS',
        price: "210",
        originalPrice: "",
        discount: '',
        rating: 4.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 9,
        name: 'Polo with Contrast Trims',
        price: "212",
        originalPrice: "242",
        discount: '20%',
        rating: 4.0,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/30186077/pexels-photo-30186077/free-photo-of-stylish-man-with-tattoos-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 10,
        name: 'Gradient Graphic T-shirt',
        price: "145",
        originalPrice: "",
        discount: '',
        rating: 3.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/1050232/pexels-photo-1050232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 11,
        name: 'Polo with Tipping Details',
        price: "180",
        originalPrice: "",
        discount: '',
        rating: 4.5,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 12,
        name: 'Black Striped T-shirt',
        price: "120",
        originalPrice: "150",
        discount: '30%',
        rating: 5.0,
        ratingCount: 5,
        ratingImage:"/rating.png",
        imageUrl: 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
  
    ],{status:200})
}


  