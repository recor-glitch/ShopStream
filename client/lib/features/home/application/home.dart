import 'package:client/shared/constants.dart';
import 'package:client/shared/provider/navbar.provider.dart';
import 'package:client/shared/utils/scaleConverter.dart';
import 'package:client/shared/widget/menu/megaMenu.dart';
import 'package:client/shared/widget/navbar/drawer.dart';
import 'package:client/shared/widget/navbar/responsiveNavbar.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late final ScaleConverter heightConverter;
  late final ScaleConverter widthConverter;

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
    return Scaffold(
      backgroundColor: Colors.white,
      drawer: const DrawerComponent(),
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(heightConverter.getSize(2)),
        child: ResponsiveNavbar(context),
      ),
      body: SafeArea(
          child: Stack(
        children: [
          SizedBox(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
          ),

          // ANIMATED MEGA MENU
          Positioned(
              top: heightConverter.getSize(1),
              left: widthConverter.getSize(3),
              child: Consumer<NavProvider>(
                builder: (context, navState, child) {
                  return navState.hasHovered
                      ? MouseRegion(
                          onEnter: (event) {
                            navState.toggleHoveredContent(isHovered: true);
                          },
                          onExit: (event) {
                            navState.toggleHovered(isHovered: false);
                            navState.toggleHoveredContent(isHovered: false);
                          },
                          child: const MegaMenu(
                              contents: menMenuItems, crossAxisCount: 3),
                        )
                      : Container();
                },
              ))
        ],
      )),
    );
  }
}
