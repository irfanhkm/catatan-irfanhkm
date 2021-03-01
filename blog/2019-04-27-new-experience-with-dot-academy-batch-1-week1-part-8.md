---
slug: new-experience-with-dot-academy-batch-1-week1-part-8
date: 2019-04-27T15:08:53.621Z
author: "Irfan Hakim"
title: "New experience with DOT Academy Batch 1 | #Week1 Part 8"
subtitle: "Hello Medium !, Perkenalan dulu, aku Irfan Hakim biasa dipanggil Irfan. Pelajar dari SMK Telkom Malang yang sedang mengisi waktu luangnya dengan mengikuti kegiataan bootcamp / academy di perusahaan softaware house di malang yaitu DOT Indonesia."
image: /blog/12v6Zy4nCjowZLukma3BViA.jpeg
images:
  - /blog/12v6Zy4nCjowZLukma3BViA.jpeg
  - /blog/12v6Zy4nCjowZLukma3BViA.jpeg
  - /blog/1XP6B-7uA53rsbFuikla-pA.png
  - /blog/1TwR7joiUC2TFfciVVoVSvw.png
tags:
  - week-1
  - software-development
  - computer-science
  - laravel
  - bootcamp
keywords:
  - week-1
  - software-development
  - computer-science
  - laravel
  - bootcamp
canonical: https://medium.com/dot-academy-batch-1/new-experience-with-dot-academy-batch-1-week1-part-8-5821059af009
---

Di medium aku dan temen-temen disuruh oleh para mentor untuk menshare atau berbagi ilmu setiap minggunya, jadi ini bukan artikel pertama dan terakhir ya. . .

### Apasih DOT Academy Itu ?

![Poster Roadshow Pengenalan DOT Academy di sekolah](/blog/12v6Zy4nCjowZLukma3BViA.jpeg)*Poster Roadshow Pengenalan DOT Academy di sekolah*

DOT academy merupakan sebuah kelas pemrograman yang terlahir dari kerjasama dengan SMK Telkom Malang. Kelas pemrograman ini berjalan selama 3 bulan, free, dan juga difasilitasi oleh mentor-mentor yang handal.

### Apasih yang dipelajari di DOT Academy

Senada dengan yang disampaikan oleh Mas Tofin selaku *Coordinator [*D](https://mobayar.com/)OT Academy menyampaikan bahwa kegiatan ini bertujuan menghilangkan gap atau perbedaan skill antara siswa dan dunia industri. Dengan itu alumni/lulusan DOT Academy diharapkan siap bekerja dengan handal.

Untuk materi yang dipelajari ada 3 bab utama yang dibagi tiap bulannya :

1. Bulan 1 : Backend dengan Laravel

1. Bulan 2 : Frontend dengan Vuejs

1. Bulan 3 : Membangun kerjasama tim yang baik (SCRUM)

Setiap harinya akan ada challenge dari mentor tentang materi yang sudah dipelajari. Challenge yang dikasih kadang diluar dugaan😏

Di hari jumat diadakan review bersama para mentor dan Mas Tofin mengenai project/tugas2 yang sudah diberikan selama seminggu.

Ada juga penilaian dari Mas Enggal selaku perwakilan dari HR yang menilai soft skill kami.

### Materi #Week1 — Part 8 : Factory Seeder

Loh kok langsung part 8 ???
Tenang, untuk materi sebelumnya bisa dilihat di medium peserta DOT Academy yang lain :
> *1. Instalasi Laravel — *Alex *
2. Database Migration — *Diana*
3. Database Operation (CRUD) — *Affinia*
4. Form validation — *Dika*
5. Auth — *Hilal*
6. Sort, Search, Pagination -*Nuzul*
7. Relationship — *Kurniadi*
8. Factory, seeder — *Irfan*
9. Soft Delete, error handling — *Iman

### Seeder memudahkan developer dalam menguji systemnya khusunya dalam hal *database*.

*Seeder *merupakan *tools *untuk mengisi data di *database* hanya dengan menjalankan *script php*. Keren bukan ?? dengan ini jika sebuah system di bangun oleh developer yang berjumlah lebih dari satu akan sangat dimudahkan dalam membuat data *dummy *tanpa mengotak atik file *sql *ataupun *phpmyadmin.*

Di folder laravel *database/seeds, *sudah ada file bawaan dari laravel yaitu *DatabaseSeeder.php.*

```php
<?php
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
    }
}
```

Pada function run() merupakan tempat untuk menginisialisasi *class seeder *yang akan dijalankan oleh *seeder*. Jadi ketika kita membuat *class seeder* baru harus di panggil di function *run() *di* DatabaseSeeder.php.*

### **Writing Seeder**

![Tabel yang akan diisi dengan seeder, Tabel Categories](/blog/1XP6B-7uA53rsbFuikla-pA.png)*Tabel yang akan diisi dengan seeder, Tabel Categories*

Untuk membuat file seeder dari *command line *bisa menggunakan script berikut

```
php artisan make:seeder CategoriesSeeder
```


untuk penulisan nama class diawali dengan nama table kemudian diakhiri dengan kata Seeder untuk membedakan dengan file-file yang lain.

Setelah itu kita menambahkan nama class pada file DatabaseSeeder.php

```php
<?php
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategoriesSeeder::class);
    }
}
```

Pada file *CategoriesSeeder.php* kita tambahkan pada pada funtion run yaitu kolom- dari tabel categories.

```php
<?php

use Illuminate\Database\Seeder;
use App\Categories;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Categories::create([
          'name' => Str::random(10),
          'product_count' => 0,
        ]);
    }
}

```

Disitu kita menginisialisasi tabel apa yang saja yang akan dijalankan oleh *seeder. Str::random(10) *adalah script untuk membuat string secara random dengan jumlah maksimal 10.

Kemudian kita menjalankan seeder dengan perintah *artisan, *perintah ini akan menjalankan file DatabaseSeeder.php kemudian menjalankan class yang di dalamnya.

```
php artisan db:seed
```


untuk menjalankan seeder yang spesifik dengan nama classnya kita bisa menambahkan command - - class

```
php artisan db:seed -class=CategoriesSeeder
```


### Factory

Lalu bagaimana caranya jika kita ingin menginput data menggunakan seeder dengan jumlah data yang banyak ? Kita bisa membuat looping dengan menggunakan seeder. Tetapi laravel sudah menyediakan *tools *untuk itu yaitu factory.

Untuk membuat factory gunakan perintah *artisan make:factory*

```
php artisan make:factory CategoriesFactory
```


*Factory *baru akan diletakkan di folder *database/factory*

Bisa juga menjalakan perintah factory langusung dengan modelnya yaitu dengan --model

```
`php artisan make:factory CategoriesFactory --model=Categories`
```


Kita buka file *CategoriesFactory *di folder *database/factory *kita edit jadi seperti dibawah ini

```php
<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Categories;
use Faker\Generator as Faker;

$factory->define(Categories::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'product_count'=>0
    ];
});
```

pada baris ke 6 kita memanggil sebuah class dari laravel yaitu Faker. Faker bertujuan untuk membuat data palsu.

pada baris 11 dan 12,merupakan inisialisasi kolom tabel apa saja yang akan diisi oleh factory.

Setelah itu kita memanggil factory pada file *CategoriesSeeder.php* dengan script yang ada di line 15:

```php
<?php

use Illuminate\Database\Seeder;
use App\Categories;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        factory(Categories::class,10)->create();
    }
}

```

```
factory(Categories::class,10)->create();
```


*Factory *langsung memanggil nama model yang berhubungan dengan tabel. Angka 10 merupakan banyaknya data yang akan dibuat.

Untuk menjalankan *factory, *sama seperti menjalankan *seeder* yaitu :

```
php artisan db:seed
```


untuk menjalankan seeder yang spesifik dengan nama classnya kita bisa menambahkan command --class

```
php artisan db:seed -class=CategoriesSeeder
```


![Hasil generate data dengan factory](/blog/1TwR7joiUC2TFfciVVoVSvw.png)*Hasil generate data dengan factory*

Ya itu tadi merupakan materi tentang *seeder* dan *factory*. Dengan adanya *seeder* dan *factory* ini, bisa memudahkan developer ketika ingin menguji suatu system khususnya di bagian database, tanpa harus meng*insert* manual di *phpmyadmin* atau *sql.*

Untuk materi selanjutya adalah tentang *soft delete* dan *error handling* pada laravel, yang akan disampaikan di medium teman saya [Muhammad Imanullah](https://medium.com/@mimanullah). Terima kasih sudah membaca [😊](https://emojipedia.org/smiling-face-with-smiling-eyes/), Keep coding, stay humble.
> *9. Soft Delete, error handling — *Iman