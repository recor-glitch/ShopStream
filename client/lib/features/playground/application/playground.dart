import 'dart:async';

import 'package:client/shared/constants.dart';
import 'package:client/shared/utils/paddingUtil.dart';
import 'package:client/shared/utils/scaleConverter.dart';
import 'package:client/shared/widget/menu/megaMenu.dart';
import 'package:flutter/material.dart';

class Playground extends StatefulWidget {
  const Playground({super.key});

  @override
  State<Playground> createState() => _PlaygroundState();
}

class _PlaygroundState extends State<Playground>
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

    return Material(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          MouseRegion(
            cursor: SystemMouseCursors.click,
            onEnter: (event) {
              if (!animationController.isAnimating) {
                animationController.forward();
              }
              setState(() {
                menMegaMenuOpen = true;
              });
            },
            onExit: (event) {
              Timer(const Duration(milliseconds: 300), () {
                if (!insideMenuContent) {
                  if (animationController.isCompleted) {
                    animationController.reset();
                  }
                  setState(() {
                    menMegaMenuOpen = false;
                  });
                }
              });
            },
            child: const Text(
              "Men",
              style: menuTitleTextStyle,
            ),
          ),
          menMegaMenuOpen
              ? Container(
                  padding: PaddingUtils.all(3),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                  ),
                  child: MouseRegion(
                    onEnter: (event) {
                      setState(() {
                        insideMenuContent = true;
                      });
                    },
                    onExit: (event) {
                      if (animationController.isCompleted) {
                        animationController.reset();
                      }
                      setState(() {
                        menMegaMenuOpen = false;
                        insideMenuContent = false;
                      });
                    },
                    child: SlideTransition(
                        position: boxPosition,
                        child: const MegaMenu(
                            contents: menMenuItems, crossAxisCount: 3)),
                  ),
                )
              : Container()
        ],
      ),
    );
  }
}
