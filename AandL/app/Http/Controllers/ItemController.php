<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Item;


class ItemController extends Controller
{
    //
    public function addItem(Request $request){
      $item = new Item;
      $item -> name = $request-> Input ('name');
      $item -> price = $request-> Input('price');
      $item ->save();
      $response = array('response' => 'Item Added!','success'=>true);
      return $response;
    }

    public function showItems(){
      $items = Item::all();

      return response()->json($items);


    }

    public function getItem($id){
      $item =  Item::find($id);
      return response()->json($item);
    }
}
