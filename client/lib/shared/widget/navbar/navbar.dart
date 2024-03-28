import 'package:client/shared/constants.dart';
import 'package:client/shared/utils/paddingUtil.dart';
import 'package:client/shared/utils/scaleConverter.dart';
import 'package:client/shared/widget/menu/megaMenuButton.dart';
import 'package:flutter/material.dart';

class Navbar extends StatefulWidget {
  const Navbar({super.key});

  @override
  State<Navbar> createState() => _NavbarState();
}

class _NavbarState extends State<Navbar> {
  late final ScaleConverter heightConverter;
  late final ScaleConverter widthConverter;
  bool menMegaMenuOpen = false;

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
      padding: PaddingUtils.getExtraLargePadding(context),
      height: heightConverter.getSize(2),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // LOGO
          Expanded(
            child: SizedBox(
              width: widthConverter.getSize(3),
              child: const Text(
                "SHOP STREAM .",
                style: logoTextStyle,
              ),
            ),
          ),
          // NAVIGATIONS
          Expanded(
            child: SizedBox(
              width: widthConverter.getSize(4),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  MegaMenuButton(menuTitle: "Men"),
                  MegaMenuButton(menuTitle: "Women"),
                  MegaMenuButton(menuTitle: "Kids"),
                  MegaMenuButton(menuTitle: "New & Featured"),
                  MegaMenuButton(menuTitle: "Gift"),
                ],
              ),
            ),
          ),
          // SEARCH & LOGIN
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
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
                        style: normalTextStyle,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
