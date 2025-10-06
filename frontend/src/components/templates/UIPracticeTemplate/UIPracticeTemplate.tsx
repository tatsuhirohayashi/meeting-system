import React, { useCallback, useEffect, useId, useRef, useState, type FC } from "react";
import styles from "./style.module.css";
import { SideBar } from "../../organisms";
import CircularProgress from "@mui/material/CircularProgress";
import { AppBar, Box, Button, ButtonGroup, Checkbox, ClickAwayListener,  Fab,  FormControl,  FormControlLabel, FormGroup, FormHelperText, FormLabel, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Radio, RadioGroup, Stack, Switch, Tab, Tabs, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fingerprint from "@mui/icons-material/Fingerprint";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

const options = ["Create a merge commit", "Squash and merge", "Rebase and merge"];

const label = { inputProps: {"aria-label": "Checkbox demo"}};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const UIPracticeTemplate: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean | null>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    // const [checked, setChecked] = useState<boolean>(true);
    const [checked, setChecked] = useState<Array<boolean>>([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
    };
    
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
    };

    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    };
    
    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    
    const menuId = useId();

    const handleClick = useCallback(() => {
        console.log(`You clicked ${options[selectedIndex]}`);
    }, [selectedIndex]);

    const handleMenuItemClick = useCallback(
        (_: React.MouseEvent<HTMLLIElement>, index: number) => {
            setSelectedIndex(index);
            setOpen(false);
        },[]
    );

    const handleToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, [])

    const handleClose = useCallback(
    (event: Event | React.SyntheticEvent) => {
      // メニュー・トグルボタン自身のクリックは無視
      if (anchorRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    },
    []
    );
    
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };

    const normalModal = () => {
        // setIsModal(!isModal)
        setIsModal(true);

        setTimeout(() => {
            setIsModal(false);
        }, 2000);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [loading]);


    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <div className={styles.modalPart}>
                    <button onClick={normalModal} className={styles.normalModal}>モーダル通常</button>
                    {
                        isModal ?
                            <div className={styles.basicModal}>
                                <div className={styles.basicModalWrapper}>
                                    <div className={styles.basicModaltitle}>
                                        ローディング中です。
                                    </div>
                                    <div className={styles.circularProgress}>
                                        <CircularProgress />
                                    </div>
                                </div>
                            </div>
                            : null
                    }
                </div>
                <div className={styles.muiBotton} >
                    <Stack direction="column" spacing={1}>
                        <Button variant="contained" onClick={() => { alert('clicked') }}>Contained</Button>
                        <Button variant="contained" disableElevation>Contained disabledElevation</Button>
                        <Button variant="text">Text</Button>
                        <Button variant="outlined" href="/">Outlined</Button>
                        <Button disabled>Disabled</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="success">Success</Button>
                        <Button color="error">Error</Button>
                        <Button color="info">info</Button>
                        <Button color="warning">warning</Button>
                        <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
                        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                        <Button variant="contained" size="small">small</Button>
                        <Button variant="contained" size="medium">medium</Button>
                        <Button variant="contained" size="large">large</Button>
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="add an alarm" color="secondary">
                            <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton aria-label="fingerprint" color="success">
                            <Fingerprint />
                        </IconButton>
                        <Tooltip title="Click to see loading">
                            <IconButton onClick={() => setLoading(true)} loading={loading}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </Tooltip>
                        <IconButton>
                            <ShoppingCartIcon fontSize="small" />
                            <CartBadge badgeContent={2} color="primary" overlap="circular" />
                        </IconButton>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            ファイルをアップロードする
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event) => console.log(event.target.files)}
                                multiple
                            />
                        </Button>
                        <Button loading loadingIndicator="Loading..." variant="outlined">
                            Fetch data
                        </Button>
                        <Button
                            fullWidth
                            loading={false}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                        >
                            Save
                        </Button>
                    </Stack>
                    <FormControlLabel
                        sx={{ display: 'block' }}
                        
                        control={
                            <Switch
                                checked={loading}
                                onChange={() => setLoading(!loading)}
                                name="loading"
                                color="primary"
                            />
                        }
                        label="Loadings"
                    />
                    <ButtonGroup variant="contained" aria-label="Basic button group" size="large">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            "& > *": {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup size="small" aria-label="Small button group">
                            {buttons}
                        </ButtonGroup>
                        <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                            {buttons}
                        </ButtonGroup>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            "& > *": {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="Vertical button group"
                            variant="contained"
                        >
                            {buttons}
                        </ButtonGroup>
                    </Box>
                    <ButtonGroup
                        variant="contained"
                        ref={anchorRef}
                        aria-label="Select merge strategy"
                    >
                        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button
                            size="small"
                            aria-controls={open ? menuId : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="menu"
                            aria-label="Select merge strategy"
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>

                    <Popper
                        sx={{ zIndex: 1 }}
                        open={open}
                        anchorEl={anchorRef.current}
                        transition
                        placement="bottom-start"
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            id={menuId}
                                            autoFocusItem={open}
                                            aria-labelledby={menuId}
                                        >
                                            {options.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    // 例として3つ目を無効化（必要なければ削除）
                                                    disabled={index === 2}
                                                    selected={index === selectedIndex}
                                                    onClick={(e) => handleMenuItemClick(e, index)}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} />
                    <Checkbox {...label} disabled />
                    <Checkbox {...label} disabled checked />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                    <Checkbox {...label} defaultChecked size="small" />
                    <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 42 } }}
                    />
                    <div>
                        <Checkbox {...label} defaultChecked />
                        <Checkbox {...label} defaultChecked color="secondary" />
                        <Checkbox {...label} defaultChecked color="success" />
                        <Checkbox {...label} defaultChecked color="default" />
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Checkbox
                            {...label}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon />}
                        />
                        {/* <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled"}}
                        /> */}
                    </div>
                    <div>
                        <FormControlLabel
                            label="Parent"
                            control={
                                <Checkbox
                                    checked={checked[0] && checked[1]}
                                    indeterminate={checked[0] !== checked[1]}
                                    onChange={handleChange1}
                                />
                            }
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                            <FormControlLabel
                                label="Child 1"
                                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                            />
                            <FormControlLabel
                                label="Child 2"
                                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                            />
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ display: 'flex' }}>
                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                <FormLabel component="legend">Assign responsibility</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                        }
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                        }
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                        }
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                                <FormHelperText>Be careful</FormHelperText>
                            </FormControl>
                            <FormControl
                                required
                                error={error}
                                component="fieldset"
                                sx={{ m: 3 }}
                                variant="standard"
                            >
                                <FormLabel component="legend">Pick two</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                        }
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                        }
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                        }
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                                <FormHelperText>You can display an error</FormHelperText>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Label placement</FormLabel>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="bottom"
                                    control={<Checkbox />}
                                    label="Bottom"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox />}
                                    label="End"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon />
                        </Fab>
                        <Fab variant="extended">
                            <NavigationIcon sx={{ mr: 1 }} />
                            Navigate
                        </Fab>
                        <Fab disabled aria-label="like">
                            <FavoriteIcon />
                        </Fab>
                    </Box>
                    {/* <Box
                        sx={{
                            bgcolor: 'background.paper',
                            width: 500,
                            position: 'relative',
                            minHeight: 200,
                        }}
                    >
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="action tabs example"
                            >
                                <Tab label="Item One"   {...a11yProps(0)} />
                                <Tab label="Item Two"   {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                    </Box> */}
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControlLabel
                                    value="disabled"
                                    disabled
                                    control={<Radio />}
                                    label="other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <Radio
                            checked={true}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Radio
                            checked={false}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};