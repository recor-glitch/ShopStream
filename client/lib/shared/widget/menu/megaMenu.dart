import 'package:client/shared/domain/menu/megaMenu.d.dart';
import 'package:client/shared/utils/scaleConverter.dart';
import 'package:client/shared/widget/menu/megaMenuItem.dart';
import 'package:flutter/material.dart';

class MegaMenu extends StatefulWidget {
  final List<SubMenuCategory> contents;
  final int crossAxisCount;
  const MegaMenu(
      {super.key, required this.contents, required this.crossAxisCount});

  @override
  State<MegaMenu> createState() => _MegaMenuState();
}

class _MegaMenuState extends State<MegaMenu> {
  late final ScaleConverter widthConverter;
  late final ScaleConverter heightConverter;

  @override
  void didChangeDependencies() {
    widthConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.width);
    heightConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.height);
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(
        maxHeight: heightConverter.getSize(8),
        maxWidth: widthConverter.getSize(6),
        minWidth: widthConverter.getSize(3),
      ),
      child:
          //  Wrap(
          //   direction: Axis.horizontal,
          //   children: [...widget.contents.map((e) => MegaMenuItem(category: e))],
          // )
          GridView.builder(
        shrinkWrap: true,
        itemCount: widget.contents.length,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            mainAxisSpacing: heightConverter.getSize(1),
            crossAxisSpacing: widthConverter.getSize(1),
            crossAxisCount: widget.crossAxisCount),
        itemBuilder: (context, index) {
          return MegaMenuItem(category: widget.contents[index]);
        },
      ),
    );
  }
}
