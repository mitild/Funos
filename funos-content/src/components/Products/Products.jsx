import { ProductCard, ProductsContainer, ProductText, ProductAnchor, CardIcon } from "./StyledProducts"

const Products = () => {
  return (
    <ProductsContainer>

       <ProductCard>
        <CardIcon src="../../../public/icons/ProductIcons-12.svg"/>
        <ProductAnchor>Ceremonias ></ProductAnchor>
      </ProductCard>

       <ProductCard>
        <CardIcon src="../../../public/icons/ProductIcons-13.svg"/>
        <ProductAnchor>Arreglos ></ProductAnchor>
      </ProductCard>

       <ProductCard>
        <CardIcon src="../../../public/icons/ProductIcons-14.svg"/>
        <ProductAnchor>Hermitas ></ProductAnchor>
      </ProductCard>

      <ProductCard>
        <CardIcon src="../../../public/icons/entierros.svg"/>
        <ProductAnchor>Funerales ></ProductAnchor>
      </ProductCard>

       <ProductCard>
        <CardIcon src="../../../public/icons/testamentos.svg"/>
        <ProductAnchor>Testamentos ></ProductAnchor>
      </ProductCard>

      <ProductCard>
        <ProductText>¿Prefieres planes integrales? <br/>Te asesoramos</ProductText>
        <ProductAnchor>Comenzar ></ProductAnchor>
      </ProductCard>
      
    </ProductsContainer>
  )
}

export default Products