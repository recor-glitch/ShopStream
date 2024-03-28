import 'package:client/shared/constants.dart';
import 'package:client/shared/domain/menu/megaMenu.d.dart';
import 'package:flutter/material.dart';

class MegaMenuItem extends StatefulWidget {
  final SubMenuCategory category;
  const MegaMenuItem({super.key, required this.category});

  @override
  State<MegaMenuItem> createState() => _MegaMenuItemState();
}

class _MegaMenuItemState extends State<MegaMenuItem> {
  int hoveredText = -1;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            widget.category.title,
            style: menuTitleTextStyle,
          ),
          ...widget.category.children.map((item) => MouseRegion(
                cursor: SystemMouseCursors.click,
                onEnter: (event) {
                  setState(() {
                    hoveredText = widget.category.children.indexOf(item);
                  });
                },
                onExit: (event) {
                  setState(() {
                    hoveredText = -1;
                  });
                },
                child: Text(
                  item.item,
                  style: widget.category.children.indexOf(item) == hoveredText
                      ? menuItemsDarkTextStyle
                      : menuItemsTextStyle,
                ),
              )),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.03,
          ),
          widget.category.children.isNotEmpty
              ? const Divider(
                  color: Colors.black26,
                  endIndent: 60,
                  height: 1,
                  thickness: 1,
                )
              : Container()
        ],
      ),
    );
  }
}
