import 'dart:async';

import 'package:client/shared/constants.dart';
import 'package:client/shared/provider/navbar.provider.dart';
import 'package:client/shared/utils/scaleConverter.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class MegaMenuButton extends StatefulWidget {
  final String menuTitle;
  const MegaMenuButton({super.key, required this.menuTitle});

  @override
  State<MegaMenuButton> createState() => _PlaygroundState();
}

class _PlaygroundState extends State<MegaMenuButton>
    with SingleTickerProviderStateMixin {
  bool menMegaMenuOpen = false;
  bool insideMenuContent = false;
  late final ScaleConverter heightConverter;
  late final ScaleConverter widthConverter;
  late AnimationController animationController;

  @override
  void initState() {
    animationController = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 300));
    super.initState();
  }

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    heightConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.height);
    widthConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.width);
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    final boxPosition =
        Tween(begin: const Offset(0.0, -1.0), end: const Offset(0.0, 0.0))
            .chain(CurveTween(curve: Curves.easeOut))
            .animate(animationController);

    return MouseRegion(
      cursor: SystemMouseCursors.click,
      onEnter: (event) {
        if (!animationController.isAnimating) {
          animationController.forward();
        }
        Provider.of<NavProvider>(context, listen: false)
            .toggleHovered(isHovered: true);
      },
      onExit: (event) {
        Timer(const Duration(milliseconds: 300), () {
          if (!Provider.of<NavProvider>(context, listen: false)
              .hasHoveredContent) {
            if (animationController.isCompleted) {
              animationController.reset();
            }
            Provider.of<NavProvider>(context, listen: false)
                .toggleHovered(isHovered: false);
            // setState(() {
            //   menMegaMenuOpen = false;
            // });
          }
        });
      },
      child: Text(
        widget.menuTitle,
        style: menuTitleTextStyle,
      ),
    );
  }
}
