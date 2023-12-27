override fun getPackages(): List<ReactPackage>? {
    val packages: MutableList<ReactPackage> = PackageList(this).getPackages()
    // below MyAppPackage is added to the list of packages returned
    packages.add(DemoPackage()) // put your package name
    return packages
}
