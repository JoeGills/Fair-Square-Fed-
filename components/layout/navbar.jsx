export default function Navbar() {
	return (
		<>
			<nav
				classname="navbar navbar-expand-lg bg-body-tertiary bg-dark"
				data-bs-theme="dark"
			>
				<div classname="container-fluid">
					<a
						classname="navbar-brand"
						href="#"
						style={{ color: "white" }}
					>
						Navbar
					</a>
					<button
						classname="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span classname="navbar-toggler-icon"></span>
					</button>
					<div
						classname="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul classname="navbar-nav me-auto mb-2 mb-lg-0">
							<li classname="nav-item">
								<a
									classname="nav-link active"
									aria-current="page"
									href="#"
									style={{
										color: "white",
									}}
								>
									About us
								</a>
							</li>
							<li classname="nav-item">
								<a
									classname="nav-link"
									href="#"
									style={{
										color: "grey",
									}}
								>
									Cotact us
								</a>
							</li>
						</ul>
						<form
							classname="d-flex"
							role="search"
						>
							<button
								classname="btn btn-outline-success"
								type="submit"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}
