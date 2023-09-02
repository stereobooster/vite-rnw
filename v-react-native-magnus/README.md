# react-native-magnus with Vite

## Install and run

```
pnpm i
pnpm run dev
```

## Notes

Current issue:

```
✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/theme/theme.provider.js" for import "ThemeProviderProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/theme/index.js:3:24:
      3 │ export { ThemeProvider, ThemeProviderProps } from './theme.provider';
        ╵                         ~~~~~~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/theme/type.js" for import "ThemeType"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/theme/index.js:6:9:
      6 │ export { ThemeType } from './type';
        ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/animated/animated.type.js" for import "AnimatedProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:2:9:
      2 │ export { AnimatedProps } from './animated/animated.type';
        ╵          ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/avatar/avatar.type.js" for import "AvatarProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:4:9:
      4 │ export { AvatarProps } from './avatar/avatar.type';
        ╵          ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/badge/badge.type.js" for import "BadgeProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:6:9:
      6 │ export { BadgeProps } from './badge/badge.type';
        ╵          ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/button/button.type.js" for import "ButtonProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:8:9:
      8 │ export { ButtonProps } from './button/button.type';
        ╵          ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/carousel/carousel.type.js" for import "CarouselProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:10:9:
      10 │ export { CarouselProps } from './carousel/carousel.type';
         ╵          ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/checkbox/checkbox.type.js" for import "CheckboxProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:12:9:
      12 │ export { CheckboxProps } from './checkbox/checkbox.type';
         ╵          ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/collapse/collapse.type.js" for import "CollapseProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:14:9:
      14 │ export { CollapseProps } from './collapse/collapse.type';
         ╵          ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/div/div.type.js" for import "DivProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:16:9:
      16 │ export { DivProps } from './div/div.type';
         ╵          ~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/div/div.type.js" for import "DivProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:18:9:
      18 │ export { DivProps as BoxProps } from './div/div.type';
         ╵          ~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/drawer/drawer.type.js" for import "DrawerRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:20:9:
      20 │ export { DrawerRef, DrawerProps } from './drawer/drawer.type';
         ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/drawer/drawer.type.js" for import "DrawerProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:20:20:
      20 │ export { DrawerRef, DrawerProps } from './drawer/drawer.type';
         ╵                     ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/dropdown/dropdown.type.js" for import "DropdownRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:22:9:
      22 │ export { DropdownRef, DropdownProps } from './dropdown/dropdown.type';
         ╵          ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/dropdown/dropdown.type.js" for import "DropdownProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:22:22:
      22 │ export { DropdownRef, DropdownProps } from './dropdown/dropdown.type';
         ╵                       ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/fab/fab.type.js" for import "FabProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:24:9:
      24 │ export { FabProps } from './fab/fab.type';
         ╵          ~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/header/header.type.js" for import "HeaderProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:26:9:
      26 │ export { HeaderProps } from './header/header.type';
         ╵          ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/icon/icon.type.js" for import "IconProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:28:9:
      28 │ export { IconProps } from './icon/icon.type';
         ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/image/image.type.js" for import "ImageProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:30:9:
      30 │ export { ImageProps } from './image/image.type';
         ╵          ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/input/input.type.js" for import "InputProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:32:9:
      32 │ export { InputProps } from './input/input.type';
         ╵          ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/mention/mention.type.js" for import "MentionProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:34:9:
      34 │ export { MentionProps } from './mention/mention.type';
         ╵          ~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/modal/modal.type.js" for import "ModalRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:36:9:
      36 │ export { ModalRef, ModalProps } from './modal/modal.type';
         ╵          ~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/modal/modal.type.js" for import "ModalProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:36:19:
      36 │ export { ModalRef, ModalProps } from './modal/modal.type';
         ╵                    ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/overlay/overlay.type.js" for import "OverlayRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:38:9:
      38 │ export { OverlayRef, OverlayProps } from './overlay/overlay.type';
         ╵          ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/overlay/overlay.type.js" for import "OverlayProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:38:21:
      38 │ export { OverlayRef, OverlayProps } from './overlay/overlay.type';
         ╵                      ~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/radio/radio.type.js" for import "RadioProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:40:9:
      40 │ export { RadioProps } from './radio/radio.type';
         ╵          ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/scrolldiv/scrolldiv.type.js" for import "ScrollDivProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:42:9:
      42 │ export { ScrollDivProps } from './scrolldiv/scrolldiv.type';
         ╵          ~~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/select/select.type.js" for import "SelectRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:44:9:
      44 │ export { SelectRef, SelectProps } from './select/select.type';
         ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/select/select.type.js" for import "SelectProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:44:20:
      44 │ export { SelectRef, SelectProps } from './select/select.type';
         ╵                     ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/skeleton/skeleton.type.js" for import "SkeletonProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:46:9:
      46 │ export { SkeletonProps } from './skeleton/skeleton.type';
         ╵          ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/snackbar/snackbar.type.js" for import "SnackbarRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:48:9:
      48 │ export { SnackbarRef, SnackbarProps } from './snackbar/snackbar.type';
         ╵          ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/snackbar/snackbar.type.js" for import "SnackbarProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:48:22:
      48 │ export { SnackbarRef, SnackbarProps } from './snackbar/snackbar.type';
         ╵                       ~~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/tag/tag.type.js" for import "TagProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:51:9:
      51 │ export { TagProps } from './tag/tag.type';
         ╵          ~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/text/text.type.js" for import "TextProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:53:9:
      53 │ export { TextProps } from './text/text.type';
         ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/toggle/toggle.type.js" for import "ToggleProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:55:9:
      55 │ export { ToggleProps } from './toggle/toggle.type';
         ╵          ~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/tooltip/tooltip.type.js" for import "TooltipRef"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:57:9:
      57 │ export { TooltipRef, TooltipProps } from './tooltip/tooltip.type';
         ╵          ~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/tooltip/tooltip.type.js" for import "TooltipProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:57:21:
      57 │ export { TooltipRef, TooltipProps } from './tooltip/tooltip.type';
         ╵                      ~~~~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/input/textarea.type.js" for import "TextareaProps"

    node_modules/.pnpm/react-native-magnus@1.0.63_react-native-animatable@1.3.3_react-native-modal@13.0.1_react-nati_gv7bi4drq2pctmvofdenfgcryy/node_modules/react-native-magnus/lib/module/ui/index.js:59:9:
      59 │ export { TextareaProps } from './input/textarea.type';
```