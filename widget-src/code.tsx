const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, Input, Ellipse } =
	widget;

const blockHeight = 240;
const blockWidth = 288;
const roundCorners = 8;

let fillColor = "#ffffff";
let strokeColor = "#cccccc";
let titlecolor = "#757575";
let textcolor = "#B3B3B3";
const ghostStroke = 2;
const ghostcolor = "#F5F5F5";

function PropertyMenuWidget() {
	const [color, setColor] = useSyncedState("theme", "#FB6543");
	const [strokeColor, setStrokeColor] = useSyncedState(
		"strokeColor",
		"#cccccc"
	);
	const [type, settype] = useSyncedState("type", "server");
	const [eventType, setEventType] = useSyncedState("eventType", "9x6");

	const typeOptions = [
		{ option: "blank", label: "" },
		{ option: "admin", label: "Admin" },
		{ option: "api", label: "API" },
		{ option: "app", label: "Application" },
		{ option: "cicd", label: "CI/CD" },
		{ option: "cms", label: "CMS" },
		{ option: "crm", label: "CRM" },
		{ option: "custom-app", label: "Custom App" },
		{ option: "custom-theme", label: "Custom Theme" },
		{ option: "database", label: "Database" },
		{ option: "dashboard", label: "Dashboard" },
		{ option: "integration", label: "Integration" },
		{ option: "network", label: "Network" },
		{ option: "microservice", label: "Microservice" },
		{ option: "middleware", label: "Middleware" },
		{ option: "partner", label: "Partner" },
		{ option: "platform", label: "Platform" },
		{ option: "plugin", label: "Plugin" },
		{ option: "portal", label: "Portal" },
		{ option: "server", label: "Server" },
		{ option: "service", label: "Service" },
		{ option: "theme", label: "Theme" },
		{ option: "third-party", label: "Third Party" },
		{ option: "tool", label: "Tool" },
		{ option: "user-area", label: "User Area" },
	];

	const eventTypeOptions = [
		{ option: "9x6", label: "Wide 6" },
		{ option: "9x3", label: "Wide 3" },
		{ option: "9x1", label: "Wide 1" },
		{ option: "6x9", label: "Reg 9" },
		{ option: "6x6", label: "Reg 6" },
		{ option: "6x3", label: "Reg 3 & Grid" },
		{ option: "6x3-noGrid", label: "Reg 3" },
		{ option: "6x1", label: "Reg 1 & Grid" },
		{ option: "6x1-noGrid", label: "Reg 1" },
		{ option: "3x6", label: "Cond 6 & Grid" },
		{ option: "3x6-noGrid", label: "Cond 6" },
		{ option: "3x3", label: "Cond 3" },
		{ option: "3x1", label: "Cond 1" },
	];

	const [title, setTitle] = useSyncedState("title", "");
	const [description, setDescription] = useSyncedState("description", "");

	usePropertyMenu(
		[
			{
				itemType: "color-selector",
				propertyName: "colors",
				tooltip: "Color selector",
				selectedOption: color,
				options: [
					{ option: "#CCCCCC", tooltip: "Mid Grey" },
					{ option: "#757575", tooltip: "Slate" },
					{ option: "#CD8E44", tooltip: "Sand" },
					{ option: "#B4E761", tooltip: "Lime" },
					{ option: "#90B94E", tooltip: "Leaf" },
					{ option: "#FFCD29", tooltip: "Yolk" },
					{ option: "#FFA629", tooltip: "Marmalade" },
					{ option: "#FB6543", tooltip: "Tomato" },
					{ option: "#0D99FF", tooltip: "Sky" },
					{ option: "#FFAFA8", tooltip: "Peach" },
					{ option: "#73BFBB", tooltip: "Ocean" },
					{ option: "#FF63A5", tooltip: "Fuchsia" },
					{ option: "#9747FF", tooltip: "Cadburys" },
				],
			},
			{
				itemType: "separator",
			},
			{
				itemType: "color-selector",
				propertyName: "strokeColors",
				tooltip: "Fill selector",
				selectedOption: strokeColor,
				options: [
					{ option: "#CCCCCC", tooltip: "Mid Grey" },
					{ option: "#6A6A6A", tooltip: "Slate" },
					{ option: "#E2C097", tooltip: "Sand" },
					{ option: "#D4F1A7", tooltip: "Lime" },
					{ option: "#C0D79C", tooltip: "Leaf" },
					{ option: "#F8DB81", tooltip: "Yolk" },
					{ option: "#FAC485", tooltip: "Marmalade" },
					{ option: "#FDA996", tooltip: "Tomato" },
					{ option: "#7ABDF2", tooltip: "Sky" },
					{ option: "#FFD1CE", tooltip: "Peach" },
					{ option: "#B0DAD8", tooltip: "Ocean" },
					{ option: "#FFA8CB", tooltip: "Fuchsia" },
					{ option: "#BD90F9", tooltip: "Cadburys" },
				],
			},
			{
				itemType: "separator",
			},
			{
				itemType: "dropdown",
				propertyName: "eventTypes",
				tooltip: "eventType selector",
				selectedOption: eventType,
				options: eventTypeOptions,
			},
			{
				itemType: "separator",
			},
			{
				itemType: "dropdown",
				propertyName: "types",
				tooltip: "type selector",
				selectedOption: type,
				options: typeOptions,
			},
			{
				itemType: "separator",
			},
			{
				itemType: "link",
				propertyName: "credits",
				tooltip: `Forty Eight Point One`,
				href: "https://fortyeight.one",
				icon: `<svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#ffffff" opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
			},
			{
				itemType: "separator",
			},
			{
				itemType: "link",
				propertyName: "credits",
				tooltip: `Joseph Lion`,
				href: "https://github.com/Joseph-Lion",
				icon: `<svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z" fill="#ffffff" opacity="0.6"></path> </g></svg>`,
			},
		],
		({ propertyName, propertyValue }) => {
			if (propertyName === "colors") {
				setColor(propertyValue);
				checkColor(propertyValue);
			} else if (propertyName === "types") {
				settype(propertyValue);
			} else if (propertyName === "strokeColors") {
				setStrokeColor(propertyValue);
				checkColor(propertyValue);
			} else if (propertyName === "eventTypes") {
				setEventType(propertyValue);
			} else if (propertyName === "action") {
				console.log(propertyName);
			}
		}
	);

	return (
		<AutoLayout // Wrapper
			stroke={strokeColor}
			strokeWidth={4}
			cornerRadius={roundCorners}
			strokeAlign="center"
			direction="vertical"
			fill={fillColor}>
			{eventType === "9x6" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>

						<AutoLayout // Segment 2
							width={blockWidth}
							height={blockHeight}
							stroke={ghostcolor}
							fill={fillColor}
							strokeWidth={ghostStroke}
							strokeAlign="center"></AutoLayout>
					</AutoLayout>

					<Input // Description
						value={description}
						placeholder="Block Description"
						onTextEditEnd={(e) => {
							setDescription(e.characters);
						}}
						fontSize={24}
						letterSpacing={-0.4}
						lineHeight={35}
						fill={textcolor}
						width={blockWidth * 3}
						height={blockHeight}
						padding={blockHeight * 0.125}
						inputFrameProps={{
							fill: fillColor,
							stroke: ghostcolor,
							strokeWidth: ghostStroke,
							padding: 26,
							strokeAlign: "center",
						}}
						placeholderProps={{}}
						inputBehavior="wrap"
						verticalAlignText="bottom"
					/>
				</>
			)}

			{eventType === "9x3" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>

						<AutoLayout // Segment 2
							width={blockWidth}
							height={blockHeight}
							stroke={ghostcolor}
							fill={fillColor}
							strokeWidth={ghostStroke}
							strokeAlign="center"></AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "9x1" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight / 2}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>

						<AutoLayout // Segment 2
							width={blockWidth}
							height={blockHeight / 2}
							stroke={ghostcolor}
							fill={fillColor}
							strokeWidth={ghostStroke}
							strokeAlign="center"></AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "6x9" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>

					<Input // Description
						value={description}
						placeholder="Block Description"
						onTextEditEnd={(e) => {
							setDescription(e.characters);
						}}
						fontSize={24}
						letterSpacing={-0.4}
						lineHeight={35}
						fill={textcolor}
						width={blockWidth * 2}
						height={blockHeight * 2}
						padding={blockHeight * 0.125}
						inputFrameProps={{
							fill: fillColor,
							stroke: ghostcolor,
							strokeWidth: ghostStroke,
							padding: 26,
							strokeAlign: "center",
						}}
						placeholderProps={{}}
						inputBehavior="wrap"
						verticalAlignText="bottom"
					/>
				</>
			)}

			{eventType === "6x6" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>

					<Input // Description
						value={description}
						placeholder="Block Description"
						onTextEditEnd={(e) => {
							setDescription(e.characters);
						}}
						fontSize={24}
						letterSpacing={-0.4}
						lineHeight={35}
						fill={textcolor}
						width={blockWidth * 2}
						height={blockHeight}
						padding={blockHeight * 0.125}
						inputFrameProps={{
							fill: fillColor,

							stroke: ghostcolor,
							strokeWidth: ghostStroke,
							padding: 26,
							strokeAlign: "center",
						}}
						placeholderProps={{}}
						inputBehavior="wrap"
						verticalAlignText="bottom"
					/>
				</>
			)}

			{eventType === "6x3" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 2.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>

						<AutoLayout // Segment 2
							width={blockWidth}
							height={blockHeight}
							stroke={ghostcolor}
							strokeWidth={ghostStroke}
							strokeAlign="center"
							fill={fillColor}></AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "6x3-noGrid" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 2.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "6x1" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight / 2}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>

						<AutoLayout // Segment 2
							width={blockWidth}
							height={blockHeight / 2}
							stroke={ghostcolor}
							fill={fillColor}
							strokeWidth={ghostStroke}
							strokeAlign="center"></AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "6x1-noGrid" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight / 2}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth * 2}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "3x6" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>

					<AutoLayout // Segment 2
						width={blockWidth}
						height={blockHeight}
						stroke={ghostcolor}
						strokeWidth={ghostStroke}
						strokeAlign="center"
						fill={fillColor}></AutoLayout>
				</>
			)}

			{eventType === "3x6-noGrid" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>

					<AutoLayout // Segment 2
						width={blockWidth}
						height={blockHeight}
						fill={fillColor}
						strokeWidth={ghostStroke}
						strokeAlign="center"></AutoLayout>
				</>
			)}

			{eventType === "3x3" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.125}>
								<Text fontSize={21} fill={color}>
									{"●"}
								</Text>
							</AutoLayout>

							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>
				</>
			)}

			{eventType === "3x1" && (
				<>
					<AutoLayout
						direction="horizontal" // Row 1
					>
						<AutoLayout
							direction="vertical" // Row 1
							height={blockHeight * 0.5}>
							<AutoLayout // Segment Top Left Copy
								width={blockWidth}
								height={blockHeight * 0.5}
								fill={fillColor}
								direction="vertical"
								padding={blockHeight * 0.1}>
								<Text fontSize={24} fill={color}>
									{typeOptions.find((f) => f.option === type).label}
								</Text>

								<Input // Title
									value={title}
									width={blockWidth * 1.75}
									placeholder="Block Title"
									onTextEditEnd={(e) => {
										setTitle(e.characters);
									}}
									fontSize={40}
									fill={titlecolor}
									letterSpacing={-0.4}
								/>
							</AutoLayout>
						</AutoLayout>
					</AutoLayout>
				</>
			)}
		</AutoLayout>
	);
}

widget.register(PropertyMenuWidget);
