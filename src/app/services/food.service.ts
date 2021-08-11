import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    getFoods(): Food[] {
        return[
            {
                id: 1,
                title: 'Sea Food',
                price: 12000,
                image: 'assets/images/foods/seafood-dishes.png',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo qui est sunt animi'
            },
            {
                id: 2,
                title: 'Hamburger',
                price: 5000,
                image: 'assets/images/foods/hamburger.png',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo qui est sunt animi'
            },
            {
                id: 3,
                title: 'Mussels',
                price: 16000,
                image: 'assets/images/foods/mussel.png',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo qui est sunt animi'
            },
            {
                id: 4,
                title: 'Pizza',
                price: 25000,
                image: 'assets/images/foods/pizza.png',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo qui est sunt animi'
            },
            {
                id: 5,
                title: 'Breakfast',
                price: 10000,
                image: 'assets/images/foods/scott-ish-breakfast.png',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo qui est sunt animi'
            },
            {
                id: 6,
                title: 'Tambi',
                price: 13000,
                image: 'assets/images/foods/tambi.png',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo qui est sunt animi'
            }
        ];
    }

    getFood(id: number): Food{
        return this.getFoods().find((food)=> food.id === id);
    }
}
