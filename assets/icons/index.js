import {
  Settings as SettingsIcon,
  ChevronLeft,
  ArrowLeft as ArrowLeftIcon,
  Wallet as WalletIcon,
  Folder,
  Component,
  Pencil,
  User,
  Key,
  LogOut,
  Landmark,
  Home,
  MessageCircle,
  SearchIcon,
  MoreVertical,
  SendIcon,
  PlusCircleIcon,
  Banknote,
  Clock,
  CheckSquare,
  XSquare,
  ArrowUpRightIcon,
  FileClock,
  VerifiedIcon,
  StopCircle,
  Compass,
  ChevronDown,
  RefreshCcw,
  ChevronRight,
  MinusCircle,
  ArrowLeftRight,
  Calendar
} from "lucide-react-native";
import MoneySvg from "./money.svg"
import CarSvg from "./suv.svg"
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from "@expo/vector-icons"; 
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { blackColor } from "../colors";
import {
  Activity,
  Wallet as WalletIconly,
  Chat,
  CloseSquare,
  Home as HomeIconly,
  Plus,
  Star,
  User as UserIconly,
  Send as SendIconly,
  Logout as LogoutIconly,
  Lock,
  TimeCircle,
  Document,
  Camera,
  Image2,
  Notification,
  Location
} from "react-native-iconly";
import { X } from "lucide-react-native";
import { Check } from "lucide-react-native";
import { CreditCard } from "lucide-react-native";
import { Info } from "lucide-react-native";

export const Settings = ({size, color}) => {
    return <SettingsIcon size={size? size : 20} color={color? color : blackColor.default} />
}

export const CreditCardIcon = ({size, color}) => {
    return <CreditCard size={size? size : 20} color={color? color : blackColor.default} />
}


export const InfoIcon = ({size, color}) => {
    return <Info size={size? size : 20} color={color? color : blackColor.default} />
}


export const CalendarIcon = ({size, color}) => {
    return <Calendar size={size? size : 20} color={color? color : blackColor.default} />
}

export const Dashboard = ({size, color}) => {
    return <Home size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const ArrowLeft = ({size, color}) => {
    return <ArrowLeftIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const AngleLeft = ({size, color}) => {
    return <ChevronLeft size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const AngleRight = ({size, color}) => {
    return <ChevronRight size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const AngleDown = ({size, color}) => {
    return <ChevronDown size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Wallet = ({size, color}) => {
    return <WalletIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Project = ({size, color}) => {
    return <Folder size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Assets = ({size, color}) => {
    return <Component size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Edit = ({size, color}) => {
    return <Pencil size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Profile = ({size, color}) => {
    return <User size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Password = ({size, color}) => {
    return <Key size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Logout = ({size, color}) => {
    return <LogOut size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Bank = ({size, color}) => {
    return <Landmark size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const ChatIcon2 = ({size, color}) => {
    return <MessageCircle size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const CheckIcon = ({size, color}) => {
    return <Check size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Search = ({size, color}) => {
    return <SearchIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Menu = ({size, color}) => {
    return <MoreVertical size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Send = ({size, color}) => {
    return <SendIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const AddCircle = ({size, color}) => {
    return <PlusCircleIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Transfer = ({size, color}) => {
    return <MaterialIcons name="swap-horiz" size={size} color={color ? color : blackColor.default} />;
}

export const ArrowDown = ({size, color}) => {
    return <FontAwesome name="long-arrow-down" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const ArrowUp = ({size, color}) => {
    return <FontAwesome name="long-arrow-up" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Money = ({size, color}) => {
    return <Banknote size={size ? size : 20} color={color ? color : blackColor.default} />;
}


export const Pending = ({size, color}) => {
    return <Clock size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Exclamation = ({size, color}) => {
    return <FontAwesome name="exclamation" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const WarningBold = ({size, color}) => {
    return <FontAwesome name="warning" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Active = ({size, color}) => {
    return <CheckSquare size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const InActive = ({size, color}) => {
    return <XSquare size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const ArrowUpRight = ({size, color}) => {
    return <ArrowUpRightIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Reviewing = ({size, color}) => {
    return <FileClock size={size ? size : 20} color={color ? color : blackColor.default} />;
}


export const Verified = ({size, color}) => {
    return <VerifiedIcon size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const Terminated = ({size, color}) => {
    return <StopCircle size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const NavigationIcon = ({size, color}) => {
    return <Compass size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const TripsIcon = ({size, set, color}) => {
    return <Activity set={set? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const ChatIcon = ({size, set, color}) => {
    return <Chat set={set? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const UserIcon = ({size, set, color}) => {
    return <UserIconly set={set? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const StarIcon = ({size, set, color}) => {
    return <Star set={set? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const CancelIcon = ({size, set, color}) => {
    return <CloseSquare set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const AddIcon = ({size, set, color}) => {
    return <Plus set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const SendIcon2 = ({size, set, color}) => {
    return <SendIconly set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const CarIcon = ({size, color}) => {
    return <FontAwesome5 name="car" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const CustomerSupport = ({size, color}) => {
    return <MaterialCommunityIcons name="face-agent" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const TargetIcon = ({size, color}) => {
    return <Foundation name="target-two" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const LogOutIcon = ({size, set, color}) => {
    return <LogoutIconly set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}


export const CancelIcon2 = ({size, color}) => {
    return <X size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const DocumentIcon = ({size, set, color}) => {
    return <Document set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const CameraIcon = ({size, set, color}) => {
    return <Camera set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}


export const ImageIcon = ({size, set, color}) => {
    return <Image2 set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const NotificationIcon = ({size, set, color}) => {
    return <Notification set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const SubtractIconCircle= ({size, color}) => {
    return <MinusCircle size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const HomeIcon = ({size, set, color}) => {
    return <HomeIconly set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}


export const Wallet2 = ({size, set, color}) => {
    return <WalletIconly set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}


export const HistoryIcon = ({size, set, color}) => {
    return <TimeCircle set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const SecurityIcon = ({size, set, color}) => {
    return <Lock set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const LocationIcon = ({size, set, color}) => {
    return <Location set={set ? set : "light"} size={size ? size : 20} primaryColor={color ? color : blackColor.default} />;
}

export const ChangeCameraIcon = ({size,  color}) => {
    return <RefreshCcw size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const ConvertIcon = ({size,  color}) => {
    return <ArrowLeftRight size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const DotIcon = ({size,  color}) => {
    return <FontAwesome name="dot-circle-o" size={size ? size : 20} color={color ? color : blackColor.default} />;
}

export const MoneyIcon = ({size}) => {
    return <MoneySvg width={size ? size : 20} height={size ? size : 20} />;
}

export const SuvIcon = ({size}) => {
    return <CarSvg width={size ? size : 20} height={size ? size : 20} />;
}

export const CheckCircleIcon = ({size,  color}) => {
    return <FontAwesome name="check-circle" size={size ? size : 20} color={color ? color : blackColor.default} />;
}


export const StarHalfIcon = ({size,  color}) => {
    return <FontAwesome name="star-half-full" size={size ? size : 20} color={color ? color : blackColor.default} />;
}


