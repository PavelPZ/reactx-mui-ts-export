declare namespace Mui {


//************* mui/material-ui/styles/createBreakpoints
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	
type BreakpointValues = { [key in Breakpoint]: number };
	

interface Breakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
  only: (key: Breakpoint) => string;
  width: (key: Breakpoint) => number;
}
	

type BreakpointsOptions = Partial<{
  unit: string;
  step: number;
} & Breakpoints>;


//************* mui/material-ui/styles/spacing


interface Spacing { 
  unit: number
}
	

type SpacingOptions = DeepPartial<Spacing>;


//************* mui/material-ui/styles/createMixins


interface Mixins {
  gutters: (styles: React.CSSProperties) => React.CSSProperties;
  toolbar: React.CSSProperties;
  // ... use interface declaration merging to add custom mixins
}
	

interface MixinsOptions extends Partial<Mixins> {
  // ... use interface declaration merging to add custom mixin options
}


//************* mui/material-ui/colors/common
interface CommonColors {
  black: string;
  white: string;
  transparent: string;
  fullBlack: string;
  darkBlack: string;
  lightBlack: string;
  minBlack: string;
  faintBlack: string;
  fullWhite: string;
  darkWhite: string;
  lightWhite: string;
}


//************* mui/material-ui/styles/createPalette


interface ShadeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
  icon: string;
  divider: string;
  lightDivider: string;
}
	

interface ShadeInput {
  bottomLine: string;
  helperText: string;
  labelText: string;
  inputText: string;
  disabled: string;
}
	

interface ShadeAction {
  active: string;
  disabled: string;
}
	

interface ShadeBackground {
  default: string;
  paper: string;
  appBar: string;
  contentFrame: string;
  status: string;
}
	

interface Shade {
  text: ShadeText;
  input: ShadeInput;
  action: ShadeAction;
  background: ShadeBackground;
}
	

interface Palette {
  common: CommonColors;
  type: Contrast;
  primary: Color;
  secondary: Color;
  error: Color;
  grey: Color;
  shades: {
    dark: Shade;
    light: Shade;
  };
  text: ShadeText;
  input: ShadeInput;
  action: ShadeAction;
  background: ShadeBackground;
  getContrastText: (color: string) => string;
}
	

type PaletteOptions = DeepPartial<Palette>;


//************* mui/material-ui/styles/shadows
type Shadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];


//************* mui/material-ui/styles/transitions


interface Easing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}
	

interface Duration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}
	

interface Transitions {
  easing: Easing;
  duration: Duration;
  create(
    props: string | string[],
    options?: Partial<{ duration: number; easing: string; delay: number }>
  ): string;
  getAutoHeightDuration(height: number): number;
}
	

type TransitionsOptions = DeepPartial<Transitions>;


//************* mui/material-ui/styles/createTypography


type TextStyle =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'headline'
  | 'title'
  | 'subheading'
  | 'body1'
  | 'body2'
  | 'caption';
	

type Style = TextStyle | 'button';
	

interface FontStyle {
  fontFamily: React.CSSProperties['fontFamily'];
  fontSize: React.CSSProperties['fontSize'];
  fontWeightLight: React.CSSProperties['fontWeight'];
  fontWeightRegular: React.CSSProperties['fontWeight'];
  fontWeightMedium: React.CSSProperties['fontWeight'];
  htmlFontSize?: number;
}
	

interface TypographyStyle {
  color?: React.CSSProperties['color'];
  fontFamily: React.CSSProperties['fontFamily'];
  fontSize: React.CSSProperties['fontSize'];
  fontWeight: React.CSSProperties['fontWeight'];
  letterSpacing?: React.CSSProperties['letterSpacing'];
  lineHeight?: React.CSSProperties['lineHeight'];
  textTransform?: React.CSSProperties['textTransform'];
}
	

type Typography = { [type in Style]: TypographyStyle } & FontStyle;
	

type TypographyOptions = DeepPartial<Typography>;


//************* mui/material-ui/styles/zIndex


interface ZIndex {
  mobileStepper: number;
  menu: number;
  appBar: number;
  drawerOverlay: number;
  navDrawer: number;
  dialogOverlay: number;
  dialog: number;
  layer: number;
  popover: number;
  snackbar: number;
  tooltip: number;
}
	

type ZIndexOptions = DeepPartial<ZIndex>;


//************* mui/material-ui/Paper/Paper


interface PaperProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  PaperClassKey
> {
  component?: string | React.ComponentType<PaperProps>;
  elevation?: number;
  square?: boolean;
}
	

type PaperClassKey =
  | 'root'
  | 'rounded'
  | 'shadow0'
  | 'shadow1'
  | 'shadow2'
  | 'shadow3'
  | 'shadow4'
  | 'shadow5'
  | 'shadow6'
  | 'shadow7'
  | 'shadow8'
  | 'shadow9'
  | 'shadow10'
  | 'shadow11'
  | 'shadow12'
  | 'shadow13'
  | 'shadow14'
  | 'shadow15'
  | 'shadow16'
  | 'shadow17'
  | 'shadow18'
  | 'shadow19'
  | 'shadow20'
  | 'shadow21'
  | 'shadow22'
  | 'shadow23'
  | 'shadow24'
  ;


//************* mui/material-ui/AppBar/AppBar


interface AppBarProps extends StandardProps<
  PaperProps,
  AppBarClassKey
> {
  color?: PropTypes.Color;
  position?: 'static' | 'fixed' | 'absolute';
}
	

type AppBarClassKey =
  | PaperClassKey
  | 'positionFixed'
  | 'positionAbsolute'
  | 'positionStatic'
  | 'colorDefault'
  | 'colorPrimary'
  | 'colorAccent'
  ;


//************* mui/material-ui/Avatar/Avatar


interface AvatarProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  AvatarClassKey
> {
  alt?: string;
  childrenClassName?: string;
  component?: string | React.ComponentType<AvatarProps>;
  imgProps?: Object;
  sizes?: string;
  src?: string;
  srcSet?: string;
}
	

type AvatarClassKey =
  | 'root'
  | 'colorDefault'
  | 'img'
  ;


//************* mui/material-ui/Modal/Backdrop


interface BackdropProps extends StandardProps<{}, BackdropClassKey> {
  invisible?: boolean;
  onClick?: React.ReactEventHandler<{}>;
  [prop: string]: any;
}
	

type BackdropClassKey =
  | 'root'
  | 'invisible'
  ;


//************* mui/material-ui/Badge/Badge


interface BadgeProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  BadgeClassKey
> {
  badgeContent: React.ReactNode;
  children: React.ReactNode;
  color?: PropTypes.Color;
}
	

type BadgeClassKey =
  | 'root'
  | 'badge'
  | 'colorPrimary'
  | 'colorAccent'
  ;


//************* mui/material-ui/BottomNavigation/BottomNavigation


interface BottomNavigationProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  BottomNavigationClassKey,
  'onChange'
> {
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  showLabels?: boolean;
  value?: any;
}
	

type BottomNavigationClassKey =
  | 'root'
  ;


//************* mui/material-ui/ButtonBase/ButtonBase


interface ButtonBaseProps extends StandardProps<
  React.AnchorHTMLAttributes<HTMLElement> & React.ButtonHTMLAttributes<HTMLElement>,
  ButtonBaseClassKey
> {
  centerRipple?: boolean;
  component?: string | React.ComponentType<ButtonBaseProps>;
  disableRipple?: boolean;
  focusRipple?: boolean;
  keyboardFocusedClassName?: string;
  onKeyboardFocus?: React.FocusEventHandler<any>;
  rootRef?: React.Ref<any>;
}
	

type ButtonBaseClassKey =
  | 'root'
  | 'disabled'
  ;


//************* mui/material-ui/ButtonBase/index


//************* mui/material-ui/BottomNavigation/BottomNavigationButton


interface BottomNavigationButtonProps extends StandardProps<
  ButtonBaseProps,
  BottomNavigationButtonClassKey,
  'onChange'
> {
  icon?: string | React.ReactElement<any>;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  onClick?: React.ReactEventHandler<any>;
  selected?: boolean;
  showLabel?: boolean;
  value?: any;
}
	

type BottomNavigationButtonClassKey =
  | ButtonBaseClassKey
  | 'selected'
  | 'selectedIconOnly'
  | 'wrapper'
  | 'label'
  | 'selectedLabel'
  | 'hiddenLabel'
  | 'icon'
  ;


//************* mui/material-ui/Button/Button


interface ButtonProps extends StandardProps<
  ButtonBaseProps,
  ButtonClassKey,
  'component'
> {
  color?: PropTypes.Color | 'contrast';
  component?: string | React.ComponentType<ButtonProps>;
  dense?: boolean;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fab?: boolean;
  href?: string;
  mini?: boolean;
  raised?: boolean;
  type?: string;
}
	

type ButtonClassKey =
  | ButtonBaseClassKey
  | 'dense'
  | 'label'
  | 'flatPrimary'
  | 'flatAccent'
  | 'flatContrast'
  | 'colorInherit'
  | 'raised'
  | 'keyboardFocused'
  | 'raisedPrimary'
  | 'raisedAccent'
  | 'raisedContrast'
  | 'fab'
  ;


//************* mui/material-ui/Paper/index


//************* mui/material-ui/Card/Card


interface CardProps extends StandardProps<
  PaperProps,
  CardClassKey
> {
  raised?: boolean;
}
	

type CardClassKey =
  | PaperClassKey
  ;


//************* mui/material-ui/Card/CardActions


interface CardActionsProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  CardActionsClassKey
> {
  disableActionSpacing?: boolean;
}
	

type CardActionsClassKey =
  | 'root'
  | 'action'
  ;


//************* mui/material-ui/Card/CardContent


interface CardContentProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  CardContentClassKey
> {}
	

type CardContentClassKey =
  | 'root'
  ;


//************* mui/material-ui/Card/CardHeader


interface CardHeaderProps extends StandardProps<
  CardContentProps,
  CardHeaderClassKey,
  'title'
> {
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  subheader?: React.ReactNode;
  title?: React.ReactNode;
}
	

type CardHeaderClassKey =
  | CardContentClassKey
  | 'avatar'
  | 'content'
  | 'title'
  | 'subheader'
  ;


//************* mui/material-ui/Card/CardMedia


interface CardMediaProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  CardMediaClassKey
> {
  image?: string;
  src?: string;
  component?: string | React.ComponentType<CardMediaProps>;
}
	

type CardMediaClassKey =
  | 'root'
  ;


//************* mui/material-ui/IconButton/IconButton


interface IconButtonProps extends StandardProps<
  ButtonBaseProps,
  IconButtonClassKey
> {
  buttonRef?: React.Ref<any>;
  color?: PropTypes.Color | 'contrast';
  disabled?: boolean;
  disableRipple?: boolean;
  rootRef?: React.Ref<any>;
}
	

type IconButtonClassKey =
  | ButtonBaseClassKey
  | 'colorAccent'
  | 'colorContrast'
  | 'colorPrimary'
  | 'colorInherit'
  | 'label'
  | 'icon'
  | 'keyboardFocused'
  ;


//************* mui/material-ui/IconButton/index


//************* mui/material-ui/internal/SwitchBase


interface SwitchBaseProps extends StandardProps<
  IconButtonProps,
  SwitchBaseClassKey,
  'onChange'
> {
  checked?: boolean | string;
  checkedClassName?: string;
  checkedIcon?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  disabledClassName?: string;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  indeterminate?: boolean;
  indeterminateIcon?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<any>;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  tabIndex?: number;
  value?: string;
}
	

type SwitchBaseClassKey =
  | 'root'
  | 'default'
  | 'checked'
  | 'disabled'
  | 'input'
  ;
	

type SwitchBase = React.Component<SwitchBaseProps>
	

interface CreateSwitchBaseOptions {
  defaultIcon?: React.ReactNode;
  defaultCheckedIcon?: React.ReactNode;
  inputType?: string;
}


//************* mui/material-ui/Checkbox/Checkbox


interface CheckboxProps extends StandardProps<
  SwitchBaseProps,
  CheckboxClassKey
> {}
	

type CheckboxClassKey =
  | SwitchBaseClassKey
  ;


//************* mui/material-ui/Chip/Chip


interface ChipProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  ChipClassKey
> {
  avatar?: React.ReactElement<any>;
  label?: React.ReactNode;
  onKeyDown?: React.EventHandler<React.KeyboardEvent<any>>;
  onRequestDelete?: React.EventHandler<any>;
  deleteIcon?: React.ReactElement<any>;
}
	

type ChipClassKey =
  | 'root'
  | 'clickable'
  | 'deletable'
  | 'avatar'
  | 'avatarChildren'
  | 'label'
  | 'deleteIcon'
  ;


//************* mui/material-ui/Progress/CircularProgress


interface CircularProgressProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  CircularProgressClassKey
> {
  color?: 'primary' | 'accent' | 'inherit';
  max?: number;
  min?: number;
  mode?: 'determinate' | 'indeterminate';
  size?: number;
  value?: number;
  thickness?: number;
}
	

type CircularProgressClassKey =
  | 'root'
  | 'primaryColor'
  | 'accentColor'
  | 'svg'
  | 'indeterminateSvg'
  | 'circle'
  | 'indeterminateCircle'
  | 'determinateCircle'
  ;


//************* mui/material-ui/internal/transition


type TransitionDuration = number | { enter: number, exit: number };
	
type TransitionCallback = (element: HTMLElement) => void;
	

interface TransitionHandlers {
  onEnter: TransitionCallback;
  onEntering: TransitionCallback;
  onEntered: TransitionCallback;
  onExit: TransitionCallback;
  onExiting: TransitionCallback;
  onExited: TransitionCallback;
}
	

interface TransitionProps extends Partial<TransitionHandlers> {
  children: React.ReactElement<any>;
  style?: React.CSSProperties;
  className?: string;
  in: boolean;
  appear?: boolean;
  unmountOnExit?: boolean;
}


//************* mui/material-ui/transitions/Collapse


interface CollapseProps extends StandardProps<
  TransitionProps,
  CollapseClassKey,
  'children'
> {
  children?: React.ReactNode;
  collapsedHeight?: string;
  component?: string | React.ComponentType<CollapseProps>;
  containerProps?: Object;
  theme?: Theme;
  timeout?: TransitionDuration | 'auto';
}
	

type CollapseClassKey =
  | 'container'
  | 'entered'
  ;


//************* mui/material-ui/Dialog/DialogActions


interface DialogActionsProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  DialogActionsClassKey
> {}
	

type DialogActionsClassKey =
  | 'root'
  | 'action'
  | 'button'
  ;


//************* mui/material-ui/Modal/Modal


interface ModalProps extends StandardProps<
  React.HtmlHTMLAttributes<HTMLDivElement> & Partial<TransitionHandlers>,
  ModalClassKey
> {
  BackdropClassName?: string;
  BackdropComponent?: string | React.ComponentType<BackdropProps>;
  BackdropInvisible?: boolean;
  BackdropTransitionDuration?: TransitionDuration;
  keepMounted?: boolean;
  disableBackdrop?: boolean;
  ignoreBackdropClick?: boolean;
  ignoreEscapeKeyUp?: boolean;
  modalManager?: Object;
  onBackdropClick?: React.ReactEventHandler<{}>;
  onEscapeKeyUp?: React.ReactEventHandler<{}>;
  onRequestClose?: React.ReactEventHandler<{}>;
  show?: boolean;
}
	

type ModalClassKey =
  | 'root'
  | 'hidden'
  ;


//************* mui/material-ui/Modal/index


//************* mui/material-ui/Dialog/Dialog


interface DialogProps extends StandardProps<
  ModalProps,
  DialogClassKey,
  'onBackdropClick' | 'onEscapeKeyUp'
> {
  fullScreen?: boolean;
  ignoreBackdropClick?: boolean;
  ignoreEscapeKeyUp?: boolean;
  transitionDuration?: TransitionDuration;
  maxWidth?: 'xs' | 'sm' | 'md';
  fullWidth?: boolean;
  onBackdropClick?: Function;
  onEscapeKeyUp?: Function;
  onRequestClose?: React.EventHandler<any>;
  open?: boolean;
  transition?: React.ReactType;
}
	

type DialogClassKey =
  | ModalClassKey
  | 'root'
  | 'paper'
  | 'paperWidthXs'
  | 'paperWidthSm'
  | 'paperWidthMd'
  | 'fullWidth'
  | 'fullScreen'
  ;


//************* mui/material-ui/Dialog/DialogContent


interface DialogContentProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  DialogContentClassKey
> {}
	

type DialogContentClassKey =
  | 'root'
  ;


//************* mui/material-ui/Dialog/DialogContentText


interface DialogContentTextProps extends StandardProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  DialogContentTextClassKey
> {}
	

type DialogContentTextClassKey =
  | 'root'
  ;


//************* mui/material-ui/Dialog/DialogTitle


interface DialogTitleProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  DialogTitleClassKey
> {
  disableTypography?: boolean;
}
	

type DialogTitleClassKey =
  | 'root'
  ;


//************* mui/material-ui/Divider/Divider


interface DividerProps extends StandardProps<
  React.HTMLAttributes<HTMLHRElement>,
  DividerClassKey
> {
  absolute?: boolean;
  inset?: boolean;
  light?: boolean;
}
	

type DividerClassKey =
  | 'root'
  | 'default'
  | 'inset'
  | 'light'
  | 'absolute'
  ;


//************* mui/material-ui/transitions/Slide


interface SlideProps extends TransitionProps {
  direction: 'left' | 'right' | 'up' | 'down';
  theme?: Theme;
  timeout?: TransitionDuration;
}


//************* mui/material-ui/Drawer/Drawer


interface DrawerProps extends StandardProps<
  ModalProps,
  DrawerClassKey
> {
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  elevation?: number;
  transitionDuration?: TransitionDuration;
  ModalProps?: ModalProps
  open?: boolean;
  SlideProps?: SlideProps;
  theme?: Theme;
  type?: 'permanent' | 'persistent' | 'temporary';
}
	

type DrawerClassKey =
  | ModalClassKey
  | 'docked'
  | 'paper'
  | 'paperAnchorLeft'
  | 'paperAnchorRight'
  | 'paperAnchorTop'
  | 'paperAnchorBottom'
  | 'paperAnchorDockedLeft'
  | 'paperAnchorDockedTop'
  | 'paperAnchorDockedRight'
  | 'paperAnchorDockedBottom'
  | 'modal'
  ;


//************* mui/material-ui/Form/FormControl


interface FormControlProps extends StandardProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  FormControlClassKey
> {
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  margin?: PropTypes.Margin;
  onBlur?: React.EventHandler<any>;
  onFocus?: React.EventHandler<any>;
  required?: boolean;
  component?: string | React.ComponentType<FormControlProps>;
}
	

type FormControlClassKey =
  | 'root'
  | 'marginNormal'
  | 'marginDense'
  | 'fullWidth'
  ;


//************* mui/material-ui/Form/FormControlLabel


interface FormControlLabelProps extends StandardProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  FormControlLabelClassKey,
  'onChange'
> {
  checked?: boolean | string;
  control: React.ReactElement<any>;
  disabled?: boolean;
  inputRef?: React.Ref<any>;
  label: React.ReactNode;
  name?: string;
  onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
  value?: string;
}
	

type FormControlLabelClassKey =
  | 'root'
  | 'disabled'
  | 'label'
  ;


//************* mui/material-ui/Form/FormGroup


interface FormGroupProps extends StandardProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  FormGroupClassKey
> {
  row?: boolean;
}
	

type FormGroupClassKey =
  | 'root'
  | 'row'
  ;


//************* mui/material-ui/Form/FormHelperText


interface FormHelperTextProps extends StandardProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  FormHelperTextClassKey
> {
  disabled?: boolean;
  error?: boolean;
  margin?: 'dense';
}
	

type FormHelperTextClassKey =
  | 'root'
  | 'dense'
  | 'error'
  | 'disabled'
  ;


//************* mui/material-ui/Form/FormLabel


interface FormLabelProps extends StandardProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  FormLabelClassKey
> {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
}
	

type FormLabelClassKey =
  | 'root'
  | 'focused'
  | 'error'
  | 'disabled'
  ;


//************* mui/material-ui/Hidden/Hidden


interface HiddenProps extends StandardProps<{}, never> {
  only?: Breakpoint | Array<Breakpoint>;
  xsUp?: boolean;
  smUp?: boolean;
  mdUp?: boolean;
  lgUp?: boolean;
  xlUp?: boolean;
  xsDown?: boolean;
  smDown?: boolean;
  mdDown?: boolean;
  lgDown?: boolean;
  xlDown?: boolean;
  implementation?: 'js' | 'css';
}


//************* mui/material-ui/Grid/Grid


type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
	

type GridContentAlignment = 'stretch' | 'center' | 'flex-start' | 'flex-end' |'space-between' | 'space-around';
	

type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
	

type GridSpacing = 0 | 8 | 16 | 24 | 40;
	

type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
	

type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
	

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	

interface GridProps extends StandardProps<
  React.HTMLAttributes<HTMLElement> & Partial<Record<Breakpoint, boolean | GridSize>>,
  GridClassKey,
  'hidden'
> {
  component?: string | React.ComponentType<Omit<GridProps, StrippedProps>>;
  container?: boolean;
  item?: boolean;
  alignItems?: GridItemsAlignment;
  alignContent?: GridContentAlignment;
  direction?: GridDirection;
  spacing?: GridSpacing;
  hidden?: HiddenProps;
  justify?: GridJustification;
  wrap?: GridWrap;
}
	

type GridClassKey =
  | 'typeContainer'
  | 'typeItem'
  | 'direction-xs-column'
  | 'direction-xs-column-reverse'
  | 'direction-xs-row-reverse'
  | 'wrap-xs-nowrap'
  | 'wrap-xs-wrap-reverse'
  | 'align-items-xs-center'
  | 'align-items-xs-flex-start'
  | 'align-items-xs-flex-end'
  | 'align-items-xs-baseline'
  | 'align-content-xs-center'
  | 'align-content-xs-flex-start'
  | 'align-content-xs-flex-end'
  | 'align-content-xs-space-between'
  | 'align-content-xs-space-around'
  | 'justify-xs-center'
  | 'justify-xs-flex-end'
  | 'justify-xs-space-between'
  | 'justify-xs-space-around'
  | 'spacing-xs-8'
  | 'spacing-xs-16'
  | 'spacing-xs-24'
  | 'spacing-xs-40'
  | 'grid-xs'
  | 'grid-xs-1'
  | 'grid-xs-2'
  | 'grid-xs-3'
  | 'grid-xs-4'
  | 'grid-xs-5'
  | 'grid-xs-6'
  | 'grid-xs-7'
  | 'grid-xs-8'
  | 'grid-xs-9'
  | 'grid-xs-10'
  | 'grid-xs-11'
  | 'grid-xs-12'
  ;
	

type StrippedProps =
  | 'classes'
  | 'className'
  | 'component'
  | 'container'
  | 'item'
  | 'alignContent'
  | 'alignItems'
  | 'direction'
  | 'spacing'
  | 'hidden'
  | 'justify'
  | 'wrap'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  ;


//************* mui/material-ui/GridList/GridList


interface GridListProps extends StandardProps<
  React.HTMLAttributes<HTMLUListElement>,
  GridListClassKey
> {
  cellHeight?: number | 'auto';
  cols?: number;
  component?: string | React.ComponentType<GridListProps>;
  spacing?: number;
}
	

type GridListClassKey =
  | 'root'
  ;


//************* mui/material-ui/GridList/GridListTileBar


interface GridListTileBarProps extends StandardProps<{}, GridListTileBarClassKey>
{
  actionIcon?: React.ReactNode;
  actionPosition?: 'left' | 'right';
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  titlePosition?: 'top' | 'bottom';
}
	

type GridListTileBarClassKey =
  | 'root'
  | 'rootBottom'
  | 'rootTop'
  | 'rootWithSubtitle'
  | 'titleWrap'
  | 'titleWrapActionLeft'
  | 'titleWrapActionRight'
  | 'title'
  | 'subtitle'
  | 'actionIconPositionLeft'
  | 'childImg'
  ;


//************* mui/material-ui/GridList/GridListTile


interface GridListTileProps extends StandardProps<
  React.HTMLAttributes<HTMLLIElement>,
  GridListTileClassKey
> {
  cols?: number;
  component?: string | React.ComponentType<GridListTileProps>;
  rows?: number;
}
	

type GridListTileClassKey =
  | 'root'
  | 'tile'
  | 'imgFullHeight'
  | 'imgFullWidth'
  ;


//************* mui/material-ui/Icon/Icon


interface IconProps extends StandardProps<
  React.HTMLAttributes<HTMLSpanElement>,
  IconClassKey
> {
  color?: PropTypes.Color | 'action' | 'contrast' | 'disabled' | 'error';
}
	

type IconClassKey =
  | 'root'
  | 'colorAccent'
  | 'colorAction'
  | 'colorContrast'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  ;


//************* mui/material-ui/Input/InputAdornment


interface InputAdornmentProps extends StandardProps<{}, InputAdornmentClassKey> {
  component?: string | React.ComponentType<InputAdornmentProps>;
  disableTypography?: boolean;
  position: 'start' | 'end';
}
	

type InputAdornmentClassKey =
  | 'root'
  | 'positionStart'
  | 'positionEnd'
  ;


//************* mui/material-ui/Input/Input


interface InputProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  InputClassKey,
  'onChange' | 'onKeyUp' | 'onKeyDown' | 'defaultValue'
> {
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  disableUnderline?: boolean;
  endAdornment?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  inputComponent?: string | React.ComponentType<InputProps>;
  inputProps?:
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    | React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<any>;
  margin?: 'dense';
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  rows?: string | number;
  rowsMax?: string | number;
  startAdornment?: React.ReactNode;
  type?: string;
  value?: string | number;
  onClean?: () => void;
  onDirty?: () => void;
  /**
   * `onChange`, `onKeyUp` + `onKeyDown` are applied to the inner `InputComponent`,
   * which by default is an input or textarea. Since these handlers differ from the
   * ones inherited by `React.HTMLAttributes<HTMLDivElement>` we need to omit them.
   *
   * Note that  `blur` and `focus` event handler are applied to the outter `<div>`.
   * So these can just be inherited from the native `<div>`.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
	

type InputClassKey =
  | 'root'
  | 'formControl'
  | 'inkbar'
  | 'error'
  | 'input'
  | 'inputDense'
  | 'disabled'
  | 'focused'
  | 'underline'
  | 'multiline'
  | 'inputDisabled'
  | 'inputSingleline'
  | 'inputSearch'
  | 'inputMultiline'
  | 'fullWidth'
  ;


//************* mui/material-ui/Input/InputLabel


interface InputLabelProps extends StandardProps<
  FormLabelProps,
  InputLabelClassKey
> {
  disableAnimation?: boolean;
  disabled?: boolean;
  error?: boolean;
  FormControlClasses?: Object;
  focused?: boolean;
  required?: boolean;
  shrink?: boolean;
}
	

type InputLabelClassKey =
  | FormLabelClassKey
  | 'formControl'
  | 'labelDense'
  | 'shrink'
  | 'animated'
  ;


//************* mui/material-ui/Progress/LinearProgress


interface LinearProgressProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  LinearProgressClassKey
> {
  color?: 'primary' | 'accent';
  mode?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  value?: number;
  valueBuffer?: number;
}
	

type LinearProgressClassKey =
  | 'root'
  | 'primaryColor'
  | 'primaryColorBar'
  | 'primaryDashed'
  | 'accentColor'
  | 'accentColorBar'
  | 'accentDashed'
  | 'bar'
  | 'dashed'
  | 'bufferBar2'
  | 'rootBuffer'
  | 'rootQuery'
  | 'indeterminateBar1'
  | 'indeterminateBar2'
  | 'determinateBar1'
  | 'bufferBar1'
  | 'bufferBar2Primary'
  | 'bufferBar2Accent'
  ;


//************* mui/material-ui/List/List


interface ListProps extends StandardProps<
  React.HTMLAttributes<HTMLUListElement>,
  ListClassKey
> {
  component?: string | React.ComponentType<ListProps>;
  dense?: boolean;
  disablePadding?: boolean;
  rootRef?: React.Ref<any>;
  subheader?: React.ReactElement<any>;
}
	

type ListClassKey =
  | 'root'
  | 'padding'
  | 'dense'
  | 'subheader'
  ;


//************* mui/material-ui/List/ListItemAvatar


interface ListItemAvatarProps extends StandardProps<{}, ListItemAvatarClassKey> {}
	

type ListItemAvatarClassKey =
  | 'root'
  | 'icon'
  ;


//************* mui/material-ui/List/ListItem


interface ListItemProps extends StandardProps<
  ButtonBaseProps & React.LiHTMLAttributes<HTMLElement>,
  ListItemClassKey,
  'component'
> {
  button?: boolean;
  component?: string | React.ComponentType<ListItemProps>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
}
	

type ListItemClassKey =
  | ButtonBaseClassKey
  | 'container'
  | 'keyboardFocused'
  | 'default'
  | 'dense'
  | 'divider'
  | 'gutters'
  | 'button'
  | 'secondaryAction'
  ;


//************* mui/material-ui/List/ListItemIcon


interface ListItemIconProps extends StandardProps<{}, ListItemIconClassKey> {}
	

type ListItemIconClassKey =
  | 'root'
  ;


//************* mui/material-ui/List/ListItemSecondaryAction


interface ListItemSecondaryActionProps extends StandardProps<{}, ListItemSecondaryActionClassKey> {}
	

type ListItemSecondaryActionClassKey =
  | 'root'
  ;


//************* mui/material-ui/List/ListItemText


interface ListItemTextProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  ListItemTextClassKey
> {
  disableTypography?: boolean;
  inset?: boolean;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
}
	

type ListItemTextClassKey =
  | 'root'
  | 'inset'
  | 'dense'
  | 'text'
  | 'textDense'
  ;


//************* mui/material-ui/List/ListSubheader


interface ListSubheaderProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  ListSubheaderClassKey
> {
  component?: string | React.ComponentType<ListSubheaderProps>;
  color?: 'default' | 'primary' | 'inherit';
  inset?: boolean;
  disableSticky?: boolean;
}
	

type ListSubheaderClassKey =
  | 'root'
  | 'colorPrimary'
  | 'colorInherit'
  | 'inset'
  | 'sticky'
  ;


//************* mui/material-ui/Popover/Popover


interface PopoverOrigin {
  horizontal: 'left' | 'center' | 'right' | number;
  vertical: 'top' | 'center' | 'bottom' | number;
}
	

interface PopoverProps extends StandardProps<
  ModalProps & Partial<TransitionHandlers>,
  PopoverClassKey,
  'onRequestClose'
> {
  anchorEl?: Object;
  anchorOrigin?: PopoverOrigin;
  elevation?: number;
  enteredClassName?: string;
  enteringClassName?: string;
  exitedClassName?: string;
  exitingClassName?: string;
  getContentAnchorEl?: Function;
  marginThreshold?: number;
  modal?: boolean;
  onRequestClose?: Function;
  open?: boolean;
  role?: string;
  transformOrigin?: PopoverOrigin;
  transitionDuration?: TransitionDuration;
  theme?: Object;
  PaperProps?: Partial<PaperProps>;
}
	

type PopoverClassKey =
  | ModalClassKey
  | 'paper'
  ;


//************* mui/material-ui/Popover/index


//************* mui/material-ui/List/index


//************* mui/material-ui/Menu/MenuList


interface MenuListProps extends StandardProps<
  ListProps,
  MenuListClassKey,
  'onKeyDown'
> {
  onKeyDown?: React.ReactEventHandler<React.KeyboardEvent<any>>;
}
	

type MenuListClassKey =
  | ListClassKey
  ;


//************* mui/material-ui/Menu/Menu


interface MenuProps extends StandardProps<
  PopoverProps & Partial<TransitionHandlers>,
  MenuClassKey
> {
  anchorEl?: HTMLElement;
  MenuListProps?: MenuListProps;
  onRequestClose?: React.EventHandler<any>;
  open?: boolean;
  transitionDuration?: TransitionDuration;
}
	

type MenuClassKey =
  | PopoverClassKey
  | 'root'
  ;


//************* mui/material-ui/Menu/MenuItem


interface MenuItemProps extends StandardProps<
  ListItemProps,
  MenuItemClassKey
> {
  component?: string | React.ComponentType<MenuItemProps>;
  role?: string;
  selected?: boolean;
}
	

type MenuItemClassKey =
  | ListItemClassKey
  | 'selected'
  ;


//************* mui/material-ui/Button/index


//************* mui/material-ui/MobileStepper/MobileStepper


interface MobileStepperProps extends StandardProps<
  PaperProps,
  MobileStepperClassKey
> {
  activeStep?: number;
  backButton: React.ReactElement<any>;
  nextButton: React.ReactElement<any>;  
  position?: 'bottom' | 'top' | 'static';
  steps: number;
  type?: 'text' | 'dots' | 'progress';
}
	

type MobileStepperClassKey =
  | PaperClassKey
  | 'positionBottom'
  | 'positionTop'
  | 'positionStatic'
  | 'dots'
  | 'dot'
  | 'dotActive'
  | 'progress'
  ;


//************* mui/material-ui/Radio/Radio


interface RadioProps extends StandardProps<
  SwitchBaseProps,
  RadioClassKey
> {
  checked?: boolean | string;
  checkedClassName?: string;
  checkedIcon?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  disabledClassName?: string;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  inputProps?: Object;
  inputRef?: React.Ref<any>;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  tabIndex?: number;
  value?: string;
}
	

type RadioClassKey =
  | SwitchBaseClassKey
  ;


//************* mui/material-ui/Radio/RadioGroup


interface RadioGroupProps extends StandardProps<
  FormGroupProps,
  RadioGroupClassKey,
  'onChange'
> {
  name?: string;
  onChange?: (event: React.ChangeEvent<{}>, value: string) => void;
  value?: string;
}
	

type RadioGroupClassKey =
  | FormGroupClassKey
  ;


//************* mui/material-ui/Input/index


//************* mui/material-ui/Menu/index


//************* mui/material-ui/Select/Select


interface SelectProps extends StandardProps<
  InputProps,
  SelectClassKey,
  'value'
> {
  autoWidth?: boolean;
  displayEmpty?: boolean;
  input?: React.ReactNode;
  native?: boolean;
  multiple?: boolean;
  MenuProps?: Partial<MenuProps>;
  renderValue?: Function;
  value?: Array<string | number> | string | number;
}
	

type SelectClassKey =
  | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  ;


//************* mui/material-ui/Select/SelectInput


interface SelectInputProps extends StandardProps<{}, SelectInputClassKey> {
  autoWidth: boolean;
  disabled?: boolean;
  native: boolean;
  multiple: boolean;
  MenuProps?: Partial<MenuProps>;
  name?: string;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (event: React.ChangeEvent<{}>, child: React.ReactNode) => void,
  onFocus?: React.FocusEventHandler<any>;
  readOnly?: boolean;
  renderValue?: Function;
  selectRef?: Function;
  value?: string | number | Array<string | number>;
}
	

type SelectInputClassKey =
  | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  ;


//************* mui/material-ui/Snackbar/Snackbar


type SnackBarOrigin = {
  horizontal?: 'left' | 'center' | 'right' | number;
  vertical?: 'top' | 'center' | 'bottom' | number;
};
	

interface SnackbarProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement> & Partial<TransitionHandlers>,
  SnackbarClassKey
> {
  action?: React.ReactElement<any> | React.ReactElement<any>[];
  anchorOrigin?: SnackBarOrigin;
  autoHideDuration?: number;
  resumeHideDuration?: number;
  transitionDuration?: TransitionDuration;
  message?: React.ReactElement<any>;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onRequestClose?: (event: React.SyntheticEvent<any>, reason: string) => void;
  open: boolean;
  SnackbarContentProps?: Object;
  transition?: React.ReactType;
}
	

type SnackbarClassKey =
  | 'root'
  | 'anchorTopCenter'
  | 'anchorBottomCenter'
  | 'anchorTopRight'
  | 'anchorBottomRight'
  | 'anchorTopLeft'
  | 'anchorBottomLeft'
  ;


//************* mui/material-ui/Snackbar/SnackbarContent


interface SnackbarContentProps extends StandardProps<
  PaperProps,
  SnackbarContentClassKey
> {
  action?: React.ReactElement<any>;
  message: React.ReactElement<any> | string;
}
	

type SnackbarContentClassKey =
  | PaperClassKey
  | 'message'
  | 'action'
  ;


//************* mui/material-ui/styles/withStyles


/**
   * This is basically the API of JSS. It defines a Map<string, CSS>,
   * where
   *
   * - the `keys` are the class (names) that will be created
   * - the `values` are objects that represent CSS rules (`React.CSSProperties`).
   */
type StyleRules<ClassKey extends string = string> = Record<ClassKey, React.CSSProperties>;
	

type StyleRulesCallback<ClassKey extends string = string> = (theme: Theme) => StyleRules<ClassKey>;
	

interface WithStylesOptions {
  flip?: boolean;
  withTheme?: boolean;
  name?: string;
}
	

type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
	

interface WithStyles<ClassKey extends string = string> {
  classes: ClassNameMap<ClassKey>
  theme?: Theme
}
	

interface StyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<ClassNameMap<ClassKey>>;
  innerRef?: React.Ref<any>;
}


//************* mui/material-ui/SvgIcon/SvgIcon


interface SvgIconProps extends StandardProps<
  React.SVGProps<SVGSVGElement>,
  SvgIconClassKey
  > {
  color?: PropTypes.Color | 'action' | 'contrast' | 'disabled' | 'error';
  titleAccess?: string;
  viewBox?: string;
}
	

type SvgIconClassKey =
  | 'root'
  | 'colorAccent'
  | 'colorAction'
  | 'colorContrast'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  ;


//************* mui/material-ui/Switch/Switch


interface SwitchProps extends StandardProps<
  SwitchBaseProps,
  SwitchClassKey
> {
  checked?: boolean | string;
  checkedClassName?: string;
  checkedIcon?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  disabledClassName?: string;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  inputProps?: object;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  tabIndex?: number;
  value?: string;
}
	

type SwitchClassKey =
  | SwitchBaseClassKey
  | 'bar'
  | 'icon'
  ;


//************* mui/material-ui/Tabs/Tab


interface TabProps extends StandardProps<
  ButtonBaseProps,
  TabClassKey,
  'onChange'
> {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement<any>;
  value?: any;
  label?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<{ checked: boolean }>,
    value: any
  ) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: object;
  textColor?: string | 'accent' | 'primary' | 'inherit';
}
	

type TabClassKey =
  | ButtonBaseClassKey
  | 'rootLabelIcon'
  | 'rootAccent'
  | 'rootAccentSelected'
  | 'rootAccentDisabled'
  | 'rootPrimary'
  | 'rootPrimarySelected'
  | 'rootPrimaryDisabled'
  | 'rootInherit'
  | 'rootInheritSelected'
  | 'rootInheritDisabled'
  | 'fullWidth'
  | 'wrapper'
  | 'labelContainer'
  | 'label'
  | 'labelWrapped'
  ;


//************* mui/material-ui/Tabs/TabIndicator


interface TabIndicatorProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  TabIndicatorClassKey
> {
  color: 'accent' | 'primary' | string;
  style: { left: number; width: number };
}
	

type TabIndicatorClassKey =
  | 'root'
  | 'colorAccent'
  | 'colorPrimary'
  ;


//************* mui/material-ui/Table/Table


interface TableProps extends StandardProps<
  TableBaseProps,
  TableClassKey
> {
  component?: string | React.ComponentType<TableBaseProps>;
}
	

type TableBaseProps = React.TableHTMLAttributes<HTMLTableElement>;
	

type TableClassKey =
  | 'root'
  ;


//************* mui/material-ui/Table/TableBody


interface TableBodyProps extends StandardProps<
  TableBodyBaseProps,
  TableBodyClassKey
> {
  component?: string | React.ComponentType<TableBodyBaseProps>;
}
	

type TableBodyBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;
	

type TableBodyClassKey =
  | 'root'
  ;


//************* mui/material-ui/Table/TableCell


/**
 * `<TableCell>` will be rendered as an `<th>`or `<td>` depending
 * on the context it is used in. Where context literally is the
 * React `context`.
 *
 * Since it is not decided via prop, we have create loose typings
 * here.
 */
interface TableCellProps extends StandardProps<
  TableCellBaseProps,
  TableCellClassKey
> {
  component?: string | React.ComponentType<TableCellBaseProps>;
  padding?: Padding;
  numeric?: boolean;
}
	

type TableCellBaseProps =
  & React.ThHTMLAttributes<HTMLTableHeaderCellElement>
  & React.TdHTMLAttributes<HTMLTableDataCellElement>
  ;
	

type Padding =
  | 'default'
  | 'checkbox'
  | 'dense'
  | 'none'
  ;
	

type TableCellClassKey =
  | 'root'
  | 'numeric'
  | 'head'
  | 'paddingDefault'
  | 'paddingCompact'
  | 'paddingCheckbox'
  | 'footer'
  ;


//************* mui/material-ui/Table/TableFooter


interface TableFooterProps extends StandardProps<
  TableFooterBaseProps,
  TableFooterClassKey
> {
  component?: string | React.ComponentType<TableFooterBaseProps>;
}
	

type TableFooterBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;
	

type TableFooterClassKey =
  | 'root'
  ;


//************* mui/material-ui/Table/TableHead


interface TableHeadProps extends StandardProps<
  TableHeadBaseProps,
  TableHeadClassKey
> {
  component?: string | React.ComponentType<TableHeadBaseProps>;
}
	

type TableHeadBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;
	

type TableHeadClassKey =
  | 'root'
  ;


//************* mui/material-ui/Table/TablePagination


interface LabelDisplayedRowsArgs {
  from: number;
  to: number;
  count: number;
  page: number;
}
	

interface TablePaginationProps extends StandardProps<
  TablePaginationBaseProps,
  TablePaginationClassKey
> {
  component?: string | React.ComponentType<TablePaginationBaseProps>;
  count: number;
  labelDisplayedRows?: (paginationInfo: LabelDisplayedRowsArgs) => React.ReactNode;
  labelRowsPerPage?: React.ReactNode;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onChangeRowsPerPage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
}
	

type TablePaginationBaseProps = TableCellProps;
	

type TablePaginationClassKey =
  | TableCellClassKey
  | 'toolbar'
  | 'spacer'
  | 'caption'
  | 'input'
  | 'selectRoot'
  | 'select'
  | 'actions'
  ;


//************* mui/material-ui/Table/TableRow


interface TableRowProps extends StandardProps<
  TableRowBaseProps,
  TableRowClassKey
> {
  component?: string | React.ComponentType<TableRowBaseProps>;
  hover?: boolean;
  selected?: boolean;
}
	

type TableRowBaseProps = React.HTMLAttributes<HTMLTableRowElement>;
	

type TableRowClassKey =
  | 'root'
  | 'head'
  | 'footer'
  | 'hover'
  | 'selected'
  ;


//************* mui/material-ui/Table/TableSortLabel


interface TableSortLabelProps extends StandardProps<
  ButtonBaseProps,
  TableSortLabelClassKey
> {
  active?: boolean;
  direction?: 'asc' | 'desc';
}
	

type TableSortLabelClassKey =
  | ButtonBaseClassKey
  | 'active'
  | 'icon'
  | 'desc'
  | 'asc'
  ;


//************* mui/material-ui/Tabs/Tabs


interface TabsProps extends StandardProps<
  ButtonBaseProps,
  TabsClassKey,
  'onChange'
> {
  buttonClassName?: string;
  centered?: boolean;
  children?: React.ReactNode;
  fullWidth?: boolean;
  value: any;
  indicatorClassName?: string;
  indicatorColor?: 'accent' | 'primary' | string;
  onChange: (event: React.ChangeEvent<{}>, value: any) => void;
  scrollable?: boolean;
  scrollButtons?: 'auto' | 'on' | 'off';
  TabScrollButton?: React.ReactType,
  textColor?: 'accent' | 'primary' | 'inherit' | string;
  width?: string;
}
	

type TabsClassKey =
  | ButtonBaseClassKey
  | 'flexContainer'
  | 'scrollingContainer'
  | 'fixed'
  | 'scrollable'
  | 'centered'
  ;


//************* mui/material-ui/Tabs/TabScrollButton


interface TabScrollButtonProps extends StandardProps<
  ButtonBaseProps,
  TabScrollButtonClassKey
> {
  direction?: 'left' | 'right';
  visible?: boolean;
}
	

type TabScrollButtonClassKey =
  | ButtonBaseClassKey
  | 'root'
  ;


//************* mui/material-ui/Input/Textarea


interface TextareaProps extends StandardProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  TextareaClassKey,
  'rows'
> {
  defaultValue?: any;
  disabled?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  textareaRef?: React.Ref<any>;
  value?: string;
}
	

type TextareaClassKey =
  | 'root'
  | 'shadow'
  | 'textarea'
  ;


//************* mui/material-ui/Toolbar/Toolbar


interface ToolbarProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  ToolbarClassKey
> {
  disableGutters?: boolean;
}
	

type ToolbarClassKey =
  | 'root'
  | 'gutters'
  ;


//************* mui/material-ui/Tooltip/Tooltip


interface TooltipProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  TooltipClassKey,
  'title'
> {
  disableTriggerFocus?: boolean;
  disableTriggerHover?: boolean;
  disableTriggerTouch?: boolean;
  id?: string;
  onRequestClose?: (event: React.ChangeEvent<{}>) => void;
  onRequestOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  title: React.ReactNode;
  enterDelay?: number;
  leaveDelay?: number;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  PopperProps?: object;
}
	

type TooltipClassKey =
  | 'root'
  | 'popper'
  | 'popperClose'
  | 'tooltip'
  | 'tooltipLeft'
  | 'tooltipRight'
  | 'tooltipTop'
  | 'tooltipBottom'
  | 'tooltipOpen'
  ;


//************* mui/material-ui/Typography/Typography


interface TypographyProps extends StandardProps<
  React.HTMLAttributes<HTMLElement>,
  TypographyClassKey
> {
  align?: PropTypes.Alignment;
  component?: string | React.ComponentType<TypographyProps>;
  color?: PropTypes.Color | 'secondary' | 'error';
  gutterBottom?: boolean;
  headlineMapping?: { [type in TextStyle]: string };
  noWrap?: boolean;
  paragraph?: boolean;
  type?: Style | 'caption' | 'button';
}
	

type TypographyClassKey =
  | 'root'
  | 'display4'
  | 'display3'
  | 'display2'
  | 'display1'
  | 'headline'
  | 'title'
  | 'subheading'
  | 'body2'
  | 'body1'
  | 'caption'
  | 'button'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'alignJustify'
  | 'noWrap'
  | 'gutterBottom'
  | 'paragraph'
  | 'colorInherit'
  | 'colorSecondary'
  | 'colorAccent'
  ;


//************* mui/material-ui/styles/overrides


type Overrides = {
  [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>
};
	

type ComponentNameToClassKey = {
  MuiAppBar: AppBarClassKey;
  MuiAvatar: AvatarClassKey;
  MuiBackdrop: BackdropClassKey;
  MuiBadge: BadgeClassKey;
  MuiBottomNavigation: BottomNavigationClassKey;
  MuiBottomNavigationButton: BottomNavigationButtonClassKey;
  MuiButton: ButtonClassKey;
  MuiButtonBase: ButtonBaseClassKey;
  // MuiCard: CardClassKey;
  MuiCardActions: CardActionsClassKey;
  MuiCardContent: CardContentClassKey;
  MuiCardHeader: CardHeaderClassKey;
  MuiCardMedia: CardMediaClassKey;
  MuiCheckbox: CheckboxClassKey;
  MuiChip: ChipClassKey;
  MuiCircularProgress: CircularProgressClassKey;
  MuiCollapse: CollapseClassKey;
  MuiDialog: DialogClassKey;
  MuiDialogActions: DialogActionsClassKey;
  MuiDialogContent: DialogContentClassKey;
  MuiDialogContentText: DialogContentTextClassKey;
  MuiDialogTitle: DialogTitleClassKey;
  MuiDivider: DividerClassKey;
  MuiDrawer: DrawerClassKey;
  MuiFormControl: FormControlClassKey;
  MuiFormControlLabel: FormControlLabelClassKey;
  MuiFormGroup: FormGroupClassKey;
  MuiFormHelperText: FormHelperTextClassKey;
  MuiFormLabel: FormLabelClassKey;
  MuiGrid: GridClassKey;
  MuiGridList: GridListClassKey;
  MuiGridListTile: GridListTileClassKey;
  MuiGridListTileBar: GridListTileBarClassKey;
  MuiIcon: IconClassKey;
  MuiIconButton: IconButtonClassKey;
  MuiInput: InputClassKey;
  MuiInputAdornment: InputAdornmentClassKey;
  MuiInputLabel: InputLabelClassKey;
  MuiLinearProgress: LinearProgressClassKey;
  MuiList: ListClassKey;
  MuiListItem: ListItemClassKey;
  MuiListItemAvatar: ListItemAvatarClassKey;
  MuiListItemIcon: ListItemIconClassKey;
  MuiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  MuiListItemText: ListItemTextClassKey;
  MuiListSubheader: ListSubheaderClassKey;
  MuiMenu: MenuClassKey;
  MuiMenuItem: MenuItemClassKey;
  // MuiMenuList: MenuListClassKey;
  MuiMobileStepper: MobileStepperClassKey;
  MuiModal: ModalClassKey;
  MuiPaper: PaperClassKey;
  MuiPopover: PopoverClassKey;
  MuiRadio: RadioClassKey;
  // MuiRadioGroup: RadioGroupClassKey;
  MuiSelect: SelectClassKey;
  // MuiSelectInput: SelectInputClassKey;
  MuiSnackbar: SnackbarClassKey;
  MuiSnackbarContent: SnackbarContentClassKey;
  MuiSvgIcon: SvgIconClassKey;
  MuiSwitchBase: SwitchBaseClassKey;
  MuiSwitch: SwitchClassKey;
  MuiTab: TabClassKey;
  MuiTabIndicator: TabIndicatorClassKey;
  MuiTable: TableClassKey;
  MuiTableBody: TableBodyClassKey;
  MuiTableCell: TableCellClassKey;
  MuiTableFooter: TableFooterClassKey;
  MuiTableHead: TableHeadClassKey;
  MuiTablePagination: TablePaginationClassKey;
  MuiTableRow: TableRowClassKey;
  MuiTableSortLabel: TableSortLabelClassKey;
  MuiTabs: TabsClassKey;
  MuiTabScrollButton: TabScrollButtonClassKey;
  MuiTextarea: TextareaClassKey;
  // MuiTextField: TextFieldClassKey;
  MuiToolbar: ToolbarClassKey;
  MuiTooltip: TooltipClassKey;
  MuiTypography: TypographyClassKey;
}


//************* mui/material-ui/styles/createMuiTheme


type Direction = 'ltr' | 'rtl';
	

interface ThemeOptions {
  direction?: Direction;
  palette?: PaletteOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  mixins?: MixinsOptions;
  breakpoints?: BreakpointsOptions;
  shadows?: Shadows;
  transitions?: TransitionsOptions;
  spacing?: SpacingOptions;
  zIndex?: ZIndexOptions;
  overrides?: Overrides;
}
	

interface Theme {
  direction: Direction;
  palette: Palette;
  typography: Typography;
  mixins: Mixins;
  breakpoints: Breakpoints;
  shadows: Shadows;
  transitions: Transitions;
  spacing: Spacing;
  zIndex: ZIndex;
  overrides?: Overrides;
}


//************* mui/material-ui/styles/MuiThemeProvider


interface MuiThemeProviderProps {
  theme: Theme | ((outer: Theme | null) => Theme);
  sheetsManager?: Object;
  children: React.ReactNode;
}


//************* mui/material-ui/styles/withTheme


interface WithTheme {
  theme: Theme
}


//************* mui/material-ui/styles/index


//************* mui/material-ui/AppBar/index


//************* mui/material-ui/Avatar/index


//************* mui/material-ui/Badge/index


//************* mui/material-ui/BottomNavigation/index


//************* mui/material-ui/Card/index


//************* mui/material-ui/Checkbox/index


//************* mui/material-ui/Chip/index


//************* mui/material-ui/utils/ClickAwayListener


interface ClickAwayListenerProps {
  children: React.ReactNode;
  onClickAway: (event: React.ChangeEvent<{}>) => void;
}


//************* mui/material-ui/utils/withWidth


interface WithWidthOptions {
  resizeInterval: number;
}
	

interface WithWidthProps {
  width: Breakpoint;
}


//************* mui/material-ui/Dialog/withMobileDialog


interface WithMobileDialogOptions {
  breakpoint: Breakpoint;
}


//************* mui/material-ui/Dialog/index


//************* mui/material-ui/Divider/index


//************* mui/material-ui/Drawer/index


//************* mui/material-ui/ExpansionPanel/ExpansionPanel


interface ExpansionPanelProps extends StandardProps<
  PaperProps,
  ExpansionPanelClassKey
> {
  CollapseProps?: React.ComponentType<CollapseProps>;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?:  React.ReactEventHandler<{}>;
}
	

type ExpansionPanelClassKey =
  | PaperClassKey
  | 'disabled'
  | 'expanded'
;


//************* mui/material-ui/ExpansionPanel/ExpansionPanelSummary


interface ExpansionPanelSummaryProps extends StandardProps<
  ButtonBaseProps,
  ExpansionPanelSummaryClassKey
> {
  disabled?: boolean;
  expanded?: boolean;
  expandIcon?: React.ReactNode;
  onChange?: React.ReactEventHandler<{}>;
}
	

type ExpansionPanelSummaryClassKey =
  | ButtonBaseClassKey
  | 'expanded'
  | 'focused'
  | 'disabled'
  | 'content'
  | 'contentExpanded'
  | 'expandIcon'
  | 'expandIconExpanded'
  ;


//************* mui/material-ui/ExpansionPanel/ExpansionPanelDetails


interface ExpansionPanelDetailsProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  ExpansionPanelDetailsClassKey
> {}
	

type ExpansionPanelDetailsClassKey =
  | 'root'
  ;


//************* mui/material-ui/ExpansionPanel/ExpansionPanelActions


interface ExpansionPanelActionsProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
    ExpansionPanelActionsClassKey
> {}
	

type ExpansionPanelActionsClassKey =
  | 'root'
  | 'action'
  ;


//************* mui/material-ui/ExpansionPanel/index


//************* mui/material-ui/Form/index


//************* mui/material-ui/Hidden/HiddenJs


interface HiddenJsProps {
  only?: Breakpoint | Array<Breakpoint>;
  xsUp?: boolean;
  smUp?: boolean;
  mdUp?: boolean;
  lgUp?: boolean;
  xlUp?: boolean;
  xsDown?: boolean;
  smDown?: boolean;
  mdDown?: boolean;
  lgDown?: boolean;
  xlDown?: boolean;
}


//************* mui/material-ui/Hidden/index


//************* mui/material-ui/Icon/index


//************* mui/material-ui/Grid/index


//************* mui/material-ui/Progress/index


//************* mui/material-ui/Radio/index


//************* mui/material-ui/Select/index


//************* mui/material-ui/Snackbar/index


//************* mui/material-ui/Stepper/Stepper


type Orientation = 'horizontal' | 'vertical';
	

interface StepperProps extends StandardProps<
  PaperProps,
  StepperClasskey
> {
  activeStep?: number,
  alternativeLabel?: boolean,
  children: React.ReactNode,
  connector?: React.ReactElement<any> | React.ReactNode,
  nonLinear?: boolean,
  orientation?: Orientation,
}
	

type StepperClasskey =
  | PaperClassKey
  | 'root'
  | 'horizontal'
  | 'vertical'
  ;


//************* mui/material-ui/Stepper/Step


interface StepProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  StepClasskey
> {
  active?: boolean;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  completed?: boolean;
  connector?: React.ReactElement<any>;
  disabled?: boolean;
  index?: number;
  last?: boolean;
  optional?: boolean;
  orientation?: Orientation;
}
	

type StepClasskey =
  | 'root'
  | 'horizontal'
  | 'alternativeLabel'
  ;


//************* mui/material-ui/Stepper/StepButton


type Icon2 = React.ReactElement<any> | string | number;
	

interface StepButtonProps extends StandardProps<
  ButtonBaseProps,
  StepButtonClasskey
> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactElement<any>;
  completed?: boolean;
  disabled?: boolean;
  icon?: Icon2;
  last?: boolean;
  optional?: boolean;
  orientation: Orientation;
}
	

type StepButtonClasskey =
  | ButtonBaseClassKey
  | 'root'
  | 'alternativeLabel'
  ;


//************* mui/material-ui/Stepper/StepContent


interface StepContentProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  StepContentClasskey
> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactNode;
  completed?: boolean;
  last?: boolean;
  optional?: boolean;
  orientation?: Orientation;
  transition?: Function;
  transitionDuration?: TransitionDuration | 'auto';
}
	

type StepContentClasskey =
  | 'root'
  | 'last'
  | 'transition'
  ;


//************* mui/material-ui/Stepper/StepLabel


interface StepLabelProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  StepLabelClasskey
> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactNode;
  completed?: boolean;
  disabled?: boolean;
  icon?: Icon;
  last?: boolean;
  optional?: boolean;
  orientation?: Orientation;
}
	

type StepLabelClasskey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'active'
  | 'completed'
  | 'disabled'
  | 'iconContainer'
  | 'iconContainerNoAlternative'
  | 'alternativeLabelRoot'
  | 'alternativeLabel'
  ;


//************* mui/material-ui/Stepper/index


//************* mui/material-ui/colors/amber


//************* mui/material-ui/colors/blue


//************* mui/material-ui/colors/blueGrey


//************* mui/material-ui/colors/brown


//************* mui/material-ui/colors/cyan


//************* mui/material-ui/colors/deepOrange


//************* mui/material-ui/colors/deepPurple


//************* mui/material-ui/colors/green


//************* mui/material-ui/colors/grey


//************* mui/material-ui/colors/indigo


//************* mui/material-ui/colors/lightBlue


//************* mui/material-ui/colors/lightGreen


//************* mui/material-ui/colors/lime


//************* mui/material-ui/colors/orange


//************* mui/material-ui/colors/pink


//************* mui/material-ui/colors/purple


//************* mui/material-ui/colors/red


//************* mui/material-ui/colors/teal


//************* mui/material-ui/colors/yellow


//************* mui/material-ui/colors/index


//************* mui/material-ui/SvgIcon/index


//************* mui/material-ui/Switch/index


//************* mui/material-ui/Table/index


//************* mui/material-ui/Tabs/index


//************* mui/material-ui/Typography/index


//************* mui/material-ui/TextField/TextField


interface TextFieldProps extends StandardProps<
  FormControlProps,
  TextFieldClassKey,
  'onChange' | 'defaultValue'
> {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: FormHelperTextProps;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  id?: string;
  inputClassName?: string;
  InputLabelProps?: InputLabelProps;
  InputProps?: InputProps;
  inputRef?: React.Ref<any>;
  label?: React.ReactNode;
  labelClassName?: string;
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rootRef?: React.Ref<any>;
  rows?: string | number;
  rowsMax?: string | number;
  select?: boolean;
  SelectProps?: SelectProps;
  type?: string;
  value?: string | number;
  margin?: PropTypes.Margin;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
	

type TextFieldClassKey =
  | FormControlClassKey
  ;


//************* mui/material-ui/TextField/index


//************* mui/material-ui/Toolbar/index


//************* mui/material-ui/Tooltip/index


//************* mui/material-ui/transitions/Grow


interface GrowProps extends TransitionProps {
  theme?: Theme;
  timeout?: TransitionDuration | 'auto';
}


//************* mui/material-ui/transitions/Fade


interface FadeProps extends TransitionProps {
  theme?: Theme;
  timeout?: TransitionDuration;
}


//************* mui/material-ui/transitions/index


//************* mui/material-ui/index


/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> =
  & Omit<C & { classes: any }, 'classes' | Removals>
  & StyledComponentProps<ClassKey>
  & {
    className?: string;
    style?: Partial<React.CSSProperties>;
  }
	

type Contrast = 'light' | 'dark';
	
interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
  contrastDefaultColor: Contrast;
}
	

/**
 * Utilies types based on:
 * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */

 /** @internal */
type Diff<T extends string, U extends string> = (
  { [P in T]: P } &
  { [P in U]: never } & { [x: string]: never }
)[T];
	

/** @internal */
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
	

/** @internal */
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
}
	

namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'accent' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}


//************* mui/material-ui/GridList/index


//************* mui/material-ui/internal/Portal


interface PortalProps {
  open?: boolean;
}
	

//default class Portal extends React.Component<PortalProps> {}


//************* mui/material-ui/MobileStepper/index


//************* mui/material-ui/Stepper/StepConnector


type Icon = React.ReactElement<any> | string | number;
	

interface StepConnectorProps extends StandardProps<
  React.HTMLAttributes<HTMLDivElement>,
  StepConnectorClasskey
> {
  alternativeLabel?: boolean,
  orientation?: Orientation,
}
	

type StepConnectorClasskey =
  | 'root'
  | 'alternativeLabel'
  ;


//************* mui/material-ui/styles/colorManipulator
type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
	
interface ColorObject {
  type: ColorFormat;
  color: [number, number, number] | [number, number, number, number];
}


//************* mui/material-ui/styles/createGenerateClassName


//************* mui/material-ui/styles/themeListener
// This is using the API from https://github.com/vesparny/brcast
interface MuiContext {
  getState(): Object;
  subscribe(callback: Function): Function;
}
	

interface ThemeListener {
  contextTypes: {
    'material-ui': object;
  };
  initial(context: Object): Object;
  subscribe(context: Object, callback: Function): Function;
}


//************* mui/material-ui/test-utils/createMount


interface MountOptions {
  mount: typeof mount;
}


//************* mui/material-ui/test-utils/createRender


interface RenderOptions {
  render: typeof render;
}


//************* mui/material-ui/test-utils/createShallow


interface ShallowOptions {
  shallow: typeof shallow;
  otherContext: Object;
  dive: boolean;
  untilSelector: EnzymeSelector;
}


//************* mui/material-ui/test-utils/getClasses


//************* mui/material-ui/test-utils/index


//************* mui/material-ui/test-utils/until


//************* mui/material-ui/test-utils/unwrap


//************* mui/material-ui/utils/addEventListener


//************* mui/material-ui/utils/helpers


//************* mui/material-ui/utils/keyboardFocus


//************* mui/material-ui/utils/manageAriaHidden


//************* mui/material-ui/utils/reactHelpers


//************* mui/material-ui/utils/requirePropFactory
}
