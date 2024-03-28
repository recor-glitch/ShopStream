// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'megaMenu.d.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$MenuCategoryImpl _$$MenuCategoryImplFromJson(Map<String, dynamic> json) =>
    _$MenuCategoryImpl(
      title: json['title'] as String,
      children: (json['children'] as List<dynamic>)
          .map((e) => SubMenuCategory.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$MenuCategoryImplToJson(_$MenuCategoryImpl instance) =>
    <String, dynamic>{
      'title': instance.title,
      'children': instance.children,
    };

_$SubMenuCategoryImpl _$$SubMenuCategoryImplFromJson(
        Map<String, dynamic> json) =>
    _$SubMenuCategoryImpl(
      title: json['title'] as String,
      children: (json['children'] as List<dynamic>)
          .map((e) => MenuItem.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$SubMenuCategoryImplToJson(
        _$SubMenuCategoryImpl instance) =>
    <String, dynamic>{
      'title': instance.title,
      'children': instance.children,
    };

_$MenuItemImpl _$$MenuItemImplFromJson(Map<String, dynamic> json) =>
    _$MenuItemImpl(
      item: json['item'] as String,
    );

Map<String, dynamic> _$$MenuItemImplToJson(_$MenuItemImpl instance) =>
    <String, dynamic>{
      'item': instance.item,
    };
