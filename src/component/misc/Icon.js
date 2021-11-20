import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import PreviewIcon from '@mui/icons-material/Preview';

const Icon = ({iconname}) => {
    const IconComponent = {
        HomeIcon: HomeIcon,
        GroupIcon: GroupIcon,
        SchoolIcon: SchoolIcon,
        ClassIcon: ClassIcon,
        PreviewIcon: PreviewIcon
    }

    let MyComponent = IconComponent[iconname]
    return <MyComponent />;
}

export default Icon