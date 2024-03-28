import 'package:client/shared/domain/menu/megaMenu.d.dart';
import 'package:flutter/material.dart';

// SIZES
const double bigFont = 24;
const double mediamFont = 18;
const double smallFont = 16;
const double extraSmallFont = 14;

// STYLE
const logoTextStyle = TextStyle(
    fontWeight: FontWeight.bold, fontSize: mediamFont, color: Colors.black45);
const headingTextStyle = TextStyle(
    fontWeight: FontWeight.bold, fontSize: bigFont, color: Colors.black45);
const subHeadingTextStyle = TextStyle(
    fontWeight: FontWeight.w600, fontSize: mediamFont, color: Colors.black45);
const normalTextStyle = TextStyle(
    fontWeight: FontWeight.w500, fontSize: smallFont, color: Colors.black45);
const menuTitleTextStyle = TextStyle(
    fontWeight: FontWeight.w500, fontSize: smallFont, color: Colors.black87);
const menuItemsTextStyle = TextStyle(
    fontWeight: FontWeight.w500,
    fontSize: extraSmallFont,
    color: Colors.black26);
const menuItemsDarkTextStyle = TextStyle(
    fontWeight: FontWeight.w500,
    fontSize: extraSmallFont,
    color: Colors.black87);

// HOME MENU ITEMS
// MEN
const menMenuItems = [
  SubMenuCategory(title: "Topwear", children: [
    MenuItem(item: "T-Shirts"),
    MenuItem(item: "Casual-Shirts"),
    MenuItem(item: "Formal-Shirts"),
    MenuItem(item: "Sweatshirts"),
    MenuItem(item: "Sweaters"),
    MenuItem(item: "Jackets"),
    MenuItem(item: "Blazers & Coats"),
    MenuItem(item: "Suits"),
    MenuItem(item: "Rain Jackets"),
  ]),
  SubMenuCategory(title: "Bottomwear", children: [
    MenuItem(item: "Jeans"),
    MenuItem(item: "Casual-Trousers"),
    MenuItem(item: "Formal-Trousers"),
    MenuItem(item: "Shorts"),
    MenuItem(item: "Track Pants & Joggers"),
  ]),
  SubMenuCategory(title: "Footwear", children: [
    MenuItem(item: "Casual-Shoes"),
    MenuItem(item: "Sport-Shoes"),
    MenuItem(item: "Formal-Shoes"),
    MenuItem(item: "Sneakers"),
    MenuItem(item: "Sandals & Floaters"),
    MenuItem(item: "Flip Flops"),
    MenuItem(item: "Socks"),
  ]),
  SubMenuCategory(title: "Sports & Active Wear", children: [
    MenuItem(item: "Sport-Shoes"),
    MenuItem(item: "Sports-Sandals"),
    MenuItem(item: "Active T-Shirts"),
    MenuItem(item: "Track Pants & Shorts"),
    MenuItem(item: "TrackSuits"),
    MenuItem(item: "Jackets & SweatShirts"),
    MenuItem(item: "Sports Accessories"),
    MenuItem(item: "Swimwears"),
  ]),
  SubMenuCategory(title: "Fashion Accessories", children: [
    MenuItem(item: "Walets"),
    MenuItem(item: "Belts"),
    MenuItem(item: "Perfumes & Body Mists"),
    MenuItem(item: "Trimmers"),
    MenuItem(item: "Deodorants"),
    MenuItem(item: "Ties, Cuflinks & Pocket Squares"),
    MenuItem(item: "Accessory Gift Sets"),
    MenuItem(item: "Caps & Hats"),
    MenuItem(item: "Muflers & Scarves & Gloves"),
    MenuItem(item: "Phone Cases"),
    MenuItem(item: "Rings & Wristwears"),
    MenuItem(item: "Helmets"),
  ]),
];
