import 'package:client/shared/widget/navbar/navbar.dart';
import 'package:flutter/material.dart';

Widget ResponsiveNavbar(BuildContext context) {
  return LayoutBuilder(
    builder: (context, constraints) {
      if (constraints.maxWidth >= 768) {
        return const Navbar();
      } else {
        return AppBar(
          title: const Text(''), // Adjust title
          leading: IconButton(
            icon: const Icon(Icons.menu),
            onPressed: () => Scaffold.of(context).openDrawer(),
          ),
        );
      }
    },
  );
}
