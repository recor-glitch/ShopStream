import 'package:client/shared/utils/paddingUtil.dart';
import 'package:client/shared/utils/scaleConverter.dart';
import 'package:flutter/material.dart';

class Navbar extends StatefulWidget {
  const Navbar({super.key});

  @override
  State<Navbar> createState() => _NavbarState();
}

class _NavbarState extends State<Navbar> {
  late final heightConverter;
  late final widthConverter;

  @override
  void didChangeDependencies() {
    heightConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.height);
    widthConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.width);
    super.didChangeDependencies();
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: PaddingUtils.getMediumPadding(context),
      height: heightConverter.getSize(2),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // NAVIGATIONS
          SizedBox(
            width: widthConverter.getSize(4),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  "Men",
                  style: TextStyle(fontWeight: FontWeight.w500),
                ),
                Text(
                  "Women",
                  style: TextStyle(fontWeight: FontWeight.w500),
                ),
                Text(
                  "Kids",
                  style: TextStyle(fontWeight: FontWeight.w500),
                ),
                Text(
                  "New & Featured",
                  style: TextStyle(fontWeight: FontWeight.w500),
                ),
                Text(
                  "Gift",
                  style: TextStyle(fontWeight: FontWeight.w500),
                ),
              ],
            ),
          ),
          // LOGO
          const SizedBox(),
          // SEARCH & LOGIN
          SizedBox(
            width: widthConverter.getSize(2),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Icon(Icons.search),
                Icon(Icons.shopping_bag_outlined),
                Text(
                  "Login",
                  style: TextStyle(fontWeight: FontWeight.w500),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
