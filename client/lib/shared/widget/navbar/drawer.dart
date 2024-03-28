import 'package:client/shared/constants.dart';
import 'package:flutter/material.dart';

class DrawerComponent extends StatelessWidget {
  const DrawerComponent({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: const [
          DrawerHeader(
              child: Text(
            "Shop Stream",
            style: subHeadingTextStyle,
          )),
          ListTile(
            title: Text(
              "Men",
              style: normalTextStyle,
            ),
          ),
          ListTile(
            title: Text(
              "women",
              style: normalTextStyle,
            ),
          ),
          ListTile(
            title: Text(
              "Kids",
              style: normalTextStyle,
            ),
          ),
          ListTile(
            title: Text(
              "New & Featured",
              style: normalTextStyle,
            ),
          ),
          ListTile(
            title: Text(
              "Gift",
              style: normalTextStyle,
            ),
          ),
        ],
      ),
    );
  }
}
