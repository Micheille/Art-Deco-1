package com.example.artdeco.model;

import com.example.artdeco.ProductType;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;


@Document
public class Product {
    public Product(ProductType type, String name, double price, Binary image, String contentType ){
        this.type = type;
        this.name = name;
        this.image = image;
        this.price = price;
        this.contentType = contentType;
    }

    @Id
    private String id;
    String name;
    Binary image;
    double price;
    ProductType type;
    String contentType;

    public String getName(){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public Binary getImage(){
        return image;
    }

    public void setImage(Binary image) {
        this.image = image;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    @Override
    public String toString(){
        return String.format("Product [id=%s, type=%s, name=%s, price=%.2f, image=%s..., content-Type=%s]", id, type.name(), name, price, Base64.getEncoder().encodeToString(image.getData()).substring(0,6), contentType);
    }
}
